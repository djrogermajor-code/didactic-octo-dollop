const providerList = document.querySelector("#provider-list");
const requestForm = document.querySelector("#request-form");
const selectedProvider = document.querySelector("#selected-provider");
const providerIdInput = document.querySelector("#provider-id");

const LOCAL_STORAGE_KEY = "marketplace_requests";

const aiHooks = {
  matchProviders: async (userInput, providers) => {
    console.log("AI hook placeholder", { userInput, providers });
    return providers.slice(0, 2);
  },
};

const tracking = {
  click: (eventName, payload = {}) => {
    console.log("[tracking] click", eventName, payload);
  },
  submit: (eventName, payload = {}) => {
    console.log("[tracking] submit", eventName, payload);
  },
};

const saveRequest = (request) => {
  const existing = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
  existing.push(request);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing));
};

const loadProviders = async () => {
  const response = await fetch("providers.json");
  if (!response.ok) {
    throw new Error("Unable to load providers.json");
  }
  return response.json();
};

const renderProviders = (providers) => {
  providerList.innerHTML = "";

  providers.forEach((provider) => {
    const card = document.createElement("article");
    card.className =
      "flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md";

    const tagsMarkup = provider.tags
      .map(
        (tag) =>
          `<span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">${tag}</span>`
      )
      .join("");

    card.innerHTML = `
      <div>
        <h3 class="text-lg font-semibold text-gray-900">${provider.name}</h3>
        <p class="mt-2 text-sm text-gray-600">${provider.description}</p>
        <div class="mt-4 flex flex-wrap gap-2">${tagsMarkup}</div>
      </div>
      <div class="mt-6 flex flex-col gap-3">
        <a
          class="inline-flex items-center justify-center rounded-lg border border-brand-500 px-4 py-2 text-sm font-semibold text-brand-600 transition hover:bg-brand-50"
          href="${provider.stripeCheckoutUrl}"
          target="_blank"
          rel="noopener noreferrer"
          data-action="checkout"
        >
          Open Stripe Checkout
        </a>
        <button
          class="inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
          type="button"
          data-action="request"
        >
          Request
        </button>
      </div>
    `;

    card.querySelector('[data-action="checkout"]').addEventListener("click", () => {
      tracking.click("stripe_checkout", { providerId: provider.id });
    });

    card.querySelector('[data-action="request"]').addEventListener("click", () => {
      tracking.click("request_open", { providerId: provider.id });
      providerIdInput.value = provider.id;
      selectedProvider.textContent = `Requesting: ${provider.name}`;
      selectedProvider.classList.add("text-brand-600");
      selectedProvider.classList.remove("text-gray-500");
      selectedProvider.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    providerList.appendChild(card);
  });
};

requestForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(requestForm);
  const request = {
    providerId: formData.get("providerId"),
    requesterName: formData.get("requesterName"),
    requesterEmail: formData.get("requesterEmail"),
    requesterMessage: formData.get("requesterMessage"),
    createdAt: new Date().toISOString(),
  };

  tracking.submit("request_submit", request);
  saveRequest(request);

  requestForm.reset();
  providerIdInput.value = "";
  selectedProvider.textContent = "Request saved locally. We will follow up shortly.";
  selectedProvider.classList.add("text-brand-600");
});

loadProviders()
  .then((providers) => {
    renderProviders(providers);
    window.marketplace = { providers, aiHooks };
  })
  .catch((error) => {
    providerList.innerHTML = `
      <div class="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-600">
        ${error.message}
      </div>
    `;
  });
