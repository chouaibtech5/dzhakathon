export default function SearchIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M16.6667 16.5L13.0417 12.875M15.0001 8.16667C15.0001 11.8486 12.0153 14.8333 8.33341 14.8333C4.65152 14.8333 1.66675 11.8486 1.66675 8.16667C1.66675 4.48477 4.65152 1.5 8.33341 1.5C12.0153 1.5 15.0001 4.48477 15.0001 8.16667Z"
        stroke="#F67F20"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
