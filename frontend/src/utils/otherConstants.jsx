export const BASE_URL =
  (import.meta.env.VITE_IS_HTTPS === "true" ? "https://" : "http://") +
  import.meta.env.VITE_BASE_URL;

export const BOT_SVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 90 90">
      <path fill="#324660" d="M38 57h14v16H38z" />
      <path fill="#486688" d="M38 68.5a20.812 20.812 0 0 1 14 0V72H38v-3.5Z" />
      <path
        fill="#324660"
        d="M0 23a6 6 0 0 1 6-6h78a6 6 0 0 1 6 6v13a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V23Z"
      />
      <path
        fill="#486688"
        d="M6 17a6 6 0 0 0-6 6v13c0 1.365.456 2.624 1.224 3.632A16.518 16.518 0 0 0 8 26.292V17H6ZM82 17v9.293c0 5.323 2.56 10.26 6.776 13.34A5.974 5.974 0 0 0 90 36V23a6 6 0 0 0-6-6h-2Z"
      />
      <path
        fill="#749BBF"
        d="M0 35V23a6 6 0 0 1 6-6h1l-.073.038a10 10 0 0 0-5.217 7.27L0 35ZM90 35V23a6 6 0 0 0-6-6h-1l.073.038a10 10 0 0 1 5.217 7.27L90 35Z"
      />
      <path
        fill="#DAD8D6"
        d="M19.658 79.303a10.947 10.947 0 0 1 8.438-6.661 109.472 109.472 0 0 1 33.808 0 10.947 10.947 0 0 1 8.438 6.661L73 85.783a99.446 99.446 0 0 1-56 0l2.658-6.48Z"
      />
      <path
        fill="#F1F1F1"
        fillRule="evenodd"
        d="M62.174 72.687a10.947 10.947 0 0 1 8.067 6.38 50.414 50.414 0 0 0-50.482 0 10.947 10.947 0 0 1 8.067-6.38 116.958 116.958 0 0 1 34.348 0Z"
        clipRule="evenodd"
      />
      <path
        fill="#F1F1F1"
        d="M10 8a8 8 0 0 1 8-8h54a8 8 0 0 1 8 8v49a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8V8Z"
      />
      <path
        fill="#F8F8F8"
        d="M10 32V8a8 8 0 0 1 8-8h44L20.275 1.07a9 9 0 0 0-8.749 8.389L10 32ZM80 33v24a8 8 0 0 1-8 8H28l42.636-1.093a8 8 0 0 0 7.776-7.457L80 33Z"
      />
      <path
        fill="#AED0F0"
        d="M18 10a2 2 0 0 1 2-2h50a2 2 0 0 1 2 2v45a2 2 0 0 1-2 2H20a2 2 0 0 1-2-2V10Z"
      />
      <path
        fill="#749BBF"
        d="M72 10v45a2 2 0 0 1-2 2H20l40.73-1.534a10 10 0 0 0 9.614-9.532L72 10Z"
        opacity=".5"
      />
      <path
        fill="#D0E6FB"
        d="M20 46.2V10h47.2l-22.441 2.157a23.674 23.674 0 0 0-20.702 17.821L20 46.2Z"
        opacity=".5"
      />
      <path
        fill="#324660"
        d="M41 25.001C41 27.766 38.725 30 36.062 30 33.258 30 31 27.767 31 25c0-2.765 2.275-4.998 5.062-4.998C38.725 19.908 41 22.236 41 25ZM59.334 25.001c0 2.765-2.276 4.999-5.062 4.999-2.787 0-4.938-2.233-4.938-4.999 0-2.765 2.275-4.998 4.938-4.998 2.804-.095 5.062 2.233 5.062 4.998Z"
      />
      <path
        fill="#324660"
        fillRule="evenodd"
        d="M30.99 38.524a37.721 37.721 0 0 0 28.02 0l1.98 4.952a43.055 43.055 0 0 1-31.98 0l1.98-4.952Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const USER_SVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Layer_1"
      x="0"
      y="0"
      viewBox="0 0 400 400"
      xmlSpace="preserve"
    >
      <defs>
        <style>{`.st2{fill:#bcbbb7}`}</style>
      </defs>
      <path fill="#e7e5e3" d="M0 0h400v400H0z" />
      <path
        d="M275.8 269.6c-52.8-40.2-46.9-75.2-47.6-89.5h32.2c3.8-6.6 5.7-14 5.7-21.5l-36.5-24c22.6-16.3 27.8-47.9 11.5-70.5-5.6-7.7-13.2-13.8-22.1-17.3-5.9-2.4-47.2 133.4-47.2 133.4-.1 3.1-.2 7.2-.2 12.1 0 13.5 33.1 11.4 31.4 23.4-2.6 17.8-3.2 31.3-18.5 74.1-10.4 28.9-79.4 0-84.3 14.2-3.6 10.6-5.3 21.7-5.2 32.8 0 1.3 2.7 20.4 105.1 20.4s105.1-19.1 105.1-20.4c-.1-29.2-10.9-53.1-29.4-67.2z"
        fill="#898785"
      />
      <path
        className="st2"
        d="M198.1 287.6c5.7-25.9 10.7-53.5 13.8-70 3.8-20.6-27.5-24.3-40.3-26.2-.6 17.6-5.5 46.2-47.4 78.2-11.3 8.6-19.7 20.9-24.6 35.8 11.3 5.5 26.4 8.8 49.7 8.8 14.9 0 42.6 1.8 48.8-26.6zM220.1 180.1c5-12.9 4.3-21.5 4.3-21.5l-20.7-24c22-9.4 35.2-27 35.2-47.5 0-15.8-7.4-30.6-19.9-40.2-25.8-10.5-55.3 1.9-65.9 27.7-8.8 21.6-1.7 46.4 17.2 60l-36.5 24c0 7.6 1.9 15 5.7 21.5h80.6z"
      />
      <path
        d="M197.1 53.3c29.1 4.5-13.4 38.4-26.9 36.8-12.7-1.6-.4-41 26.9-36.8z"
        fill="#dad7d5"
      />
    </svg>
  );
};
