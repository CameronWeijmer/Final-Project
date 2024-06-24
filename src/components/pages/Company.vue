<template>
  <div>
    <!-- Hero Section -->
    <!-- Hero Section -->
    <!-- Hero Section -->
    <header class="bg-white relative">
      <img
        src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Hero Image"
        class="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <!-- <div class="absolute inset-0 bg-blue-600 opacity-20"></div> -->
      <div
        class="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8"
      >
        <h1 class="text-4xl font-extrabold text-black sm:text-5xl lg:text-6xl">
          Welcome to CompSteel
        </h1>
        <p class="mt-6 text-xl text-black max-w-3xl">
          We provide innovative steel solutions to simplify your projects.
          Discover our range of high-quality components that you can easily
          integrate into your work.
        </p>
      </div>
    </header>

    <!-- About Section -->
    <section id="about" class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2
            class="text-base text-blue-600 font-semibold tracking-wide uppercase"
          >
            About Us
          </h2>
          <p
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Who We Are
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            At CompSteel, we specialize in providing top-notch steel components
            to help developers and builders streamline their projects. Our
            mission is to deliver high-quality, ready-to-use solutions that save
            you time and effort.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="bg-white py-16 relative overflow-hidden">
      <div class="absolute inset-0 bg-blue-50"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2
            class="text-base text-blue-600 font-semibold tracking-wide uppercase"
          >
            Our Services
          </h2>
          <p
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            What We Offer
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Explore the range of services we offer to enhance your projects with
            ease and efficiency.
          </p>
        </div>

        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white shadow-lg rounded-lg p-6">
            <img
              src="https://images.pexels.com/photos/4307871/pexels-photo-4307871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Service 1"
              class="w-full h-40 object-cover rounded-md"
            />
            <h3 class="mt-4 text-lg font-medium text-gray-900">
              High-Quality Components
            </h3>
            <p class="mt-2 text-base text-gray-500">
              Our components are crafted with precision and designed to fit
              seamlessly into your projects.
            </p>
          </div>

          <div class="bg-white shadow-lg rounded-lg p-6">
            <img
              src="https://images.pexels.com/photos/4308058/pexels-photo-4308058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Service 2"
              class="w-full h-40 object-cover rounded-md"
            />
            <h3 class="mt-4 text-lg font-medium text-gray-900">
              Custom Solutions
            </h3>
            <p class="mt-2 text-base text-gray-500">
              We provide custom steel solutions tailored to meet your specific
              needs and requirements.
            </p>
          </div>

          <div class="bg-white shadow-lg rounded-lg p-6">
            <img
              src="https://images.pexels.com/photos/4307854/pexels-photo-4307854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Service 3"
              class="w-full h-40 object-cover rounded-md"
            />
            <h3 class="mt-4 text-lg font-medium text-gray-900">
              Expert Support
            </h3>
            <p class="mt-2 text-base text-gray-500">
              Our team of experts is always ready to assist you with any queries
              or support you may need.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2
            class="text-base text-blue-600 font-semibold tracking-wide uppercase"
          >
            Contact Us
          </h2>
          <p
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Get in Touch
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Have questions or need support? Reach out to us, and we will be
            happy to assist you.
          </p>
        </div>
        <div class="mt-10 max-w-3xl mx-auto">
          <form action="#" method="POST" class="grid grid-cols-1 gap-y-6">
            <div>
              <label for="name" class="sr-only">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                autocomplete="name"
                class="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label for="email" class="sr-only">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                class="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label for="message" class="sr-only">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                class="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
