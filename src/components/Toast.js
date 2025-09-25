const getToastColor = (type) => {
  switch (type) {
    case "success":
      return "bg-green-600";
    case "error":
      return "bg-red-600";
    case "info":
      return "bg-blue-600";
  }
};

const getToastIcon = (type) => {
  switch (type) {
    case "success":
      return `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>`;
    case "error":
      return `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`;
    case "info":
      return `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`;
  }
};

export const Toast = ({ message, type = "success" }) => `
  <div class="flex flex-col gap-2 items-center justify-center mx-auto" style="width: fit-content;">
    <div class="${getToastColor("info")} text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
        <div class="flex-shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            ${getToastIcon(type)}
          </svg>
        </div>
        <p class="text-sm font-medium">${message}</p>
        <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
  </div>
`;
