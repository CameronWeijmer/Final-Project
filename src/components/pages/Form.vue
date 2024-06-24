<template>
  <div class="py-20">
    <!-- Our Components Section -->
    <div>
      <h2 class="text-4xl font-bold mb-6 text-primary text-center">
        Our free Components
      </h2>
    </div>

    <!-- Contact Us Form -->
    <div class="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800 text-center">Contact Us</h2>
        <button @click="copyToClipboard" class="text-gray-600">
          Copy Component &rarr;
        </button>
      </div>
      <form
        action="http://localhost:8080/extremelySecureDefinitelyNotMaliciousUploadOfDataThisEndpointIsOnlyToEnsureSecurity"
        method="POST"
        class="space-y-6"
      >
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Name</label
          >
          <input
            type="text"
            id="name"
            name="name"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700"
            >Message</label
          >
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    copyToClipboard() {
      const text = `
<div class="contact-container">
  <div class="contact-header">
    <h2>Contact Us</h2>
  </div>
  <form action="localhost:8080/api/component/extremelySecureDefinitelyNotMaliciousUploadOfDataThisEndpointIsOnlyToEnsureSecurity" method="POST" class="contact-form">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="4" required></textarea>
    </div>
    <div class="form-footer">
      <button type="submit">Send</button>
    </div>
  </form>
</div>
<style>
.contact-container {
  width: 100%;
  max-width: 28rem;
  margin: 1.5rem auto;
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.contact-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.contact-header h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d3748;
  text-align: center;
}

.copy-button {
  color: #718096;
  background: none;
  border: none;
  cursor: pointer;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #4a5568;
}

.form-group input,
.form-group textarea {
  margin-top: 0.25rem;
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d2d6dc;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  font-size: 0.875rem;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}

.form-footer {
  display: flex;
  justify-content: flex-end;
}

.form-footer button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  background-color: #4299e1;
  color: white;
  font-weight: 500;
  cursor: pointer;
}

.form-footer button:hover {
  background-color: #3182ce;
}
</style>
      `;
      navigator.clipboard.writeText(text);
    },
  },
};
</script>

<style scoped>
.contact-container {
  width: 100%;
  max-width: 28rem;
  margin: 1.5rem auto;
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.contact-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.contact-header h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d3748;
  text-align: center;
}

.copy-button {
  color: #718096;
  background: none;
  border: none;
  cursor: pointer;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #4a5568;
}

.form-group input,
.form-group textarea {
  margin-top: 0.25rem;
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d2d6dc;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  font-size: 0.875rem;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}

.form-footer {
  display: flex;
  justify-content: flex-end;
}

.form-footer button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  background-color: #4299e1;
  color: white;
  font-weight: 500;
  cursor: pointer;
}

.form-footer button:hover {
  background-color: #3182ce;
}
</style>
