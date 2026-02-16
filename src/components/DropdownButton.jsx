// src/components/DropdownButton.jsx
import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";

export default function DropdownButton({ items = [], onSelect }) {
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const rootRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
        setFocusedIndex(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open && focusedIndex >= 0 && itemsRef.current[focusedIndex]) {
      itemsRef.current[focusedIndex].focus();
    }
  }, [open, focusedIndex]);

  function toggleOpen() {
    setOpen((s) => !s);
    if (!open) setFocusedIndex(0);
    else setFocusedIndex(-1);
  }

  function onButtonKeyDown(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setFocusedIndex(0);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
      setFocusedIndex(items.length - 1);
    } else if (e.key === "Escape") {
      setOpen(false);
      setFocusedIndex(-1);
    }
  }

  function onItemKeyDown(e, idx) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((i) => (i + 1) % items.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((i) => (i - 1 + items.length) % items.length);
    } else if (e.key === "Escape") {
      setOpen(false);
      setFocusedIndex(-1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSelect(idx);
    }
  }

  function handleSelect(idx) {
    const selection = items[idx];
    if (onSelect) onSelect(selection);
    setOpen(false);
    setFocusedIndex(-1);
  }

  return (
    <div ref={rootRef} className="relative inline-block font-body">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={toggleOpen}
        onKeyDown={onButtonKeyDown}
        className={clsx(
          "inline-flex items-center gap-2 px-4 py-2 rounded-md shadow-sm",
          "bg-primary text-background",
          "focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
        )}
      >
        <span className="text-md">Choose role</span>
        <img
          src={arrow}
          alt=""
          aria-hidden="true"
          className={clsx(
            "w-4 h-4 transform transition-transform duration-150",
            open ? "rotate-180" : "rotate-0"
          )}
        />
      </button>

      {open && (
        <ul
          role="menu"
          aria-label="Roles"
          className="absolute left-0 mt-2 min-w-[220px] bg-background border border-border-100 rounded-md shadow-md z-40"
        >
          {items.map((item, idx) => (
            <li
              key={item.id ?? item.value ?? idx}
              role="menuitem"
              tabIndex={-1}
              ref={(el) => (itemsRef.current[idx] = el)}
              onClick={() => handleSelect(idx)}
              onKeyDown={(e) => onItemKeyDown(e, idx)}
              className={clsx(
                "px-4 py-2 text-text text-sm cursor-pointer",
                focusedIndex === idx ? "bg-secondary" : "hover:bg-secondary"
              )}
            >
              {item.label ?? item.name ?? item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
