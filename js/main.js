/**
 * Precision Wound Management - Main JavaScript
 * Interactive features and functionality
 */

(function() {
  'use strict';

  // =========================================================================
  // MOBILE NAVIGATION TOGGLE
  // =========================================================================
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const body = document.body;

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      body.classList.toggle('menu-open');

      // Update ARIA attribute
      const isExpanded = navMenu.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navMenu.contains(event.target);
      const isClickOnToggle = menuToggle.contains(event.target);

      if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when clicking on a nav link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth < 768) {
          menuToggle.classList.remove('active');
          navMenu.classList.remove('active');
          body.classList.remove('menu-open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && navMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.focus();
      }
    });
  }

  // =========================================================================
  // STICKY HEADER ON SCROLL
  // =========================================================================
  const header = document.querySelector('.site-header');
  let lastScroll = 0;

  if (header) {
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    });
  }

  // =========================================================================
  // SMOOTH SCROLLING FOR ANCHOR LINKS
  // =========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');

      // Ignore if href is just "#"
      if (targetId === '#') {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();

        // Get header height for offset
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Focus target for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus();
      }
    });
  });

  // =========================================================================
  // SERVICE ACCORDIONS
  // =========================================================================
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(function(header) {
    header.addEventListener('click', function() {
      const accordionItem = header.parentElement;
      const isActive = accordionItem.classList.contains('active');

      // Close all accordions
      document.querySelectorAll('.accordion-item').forEach(function(item) {
        item.classList.remove('active');
        const itemHeader = item.querySelector('.accordion-header');
        if (itemHeader) {
          itemHeader.setAttribute('aria-expanded', 'false');
        }
      });

      // Open clicked accordion if it wasn't active
      if (!isActive) {
        accordionItem.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });

    // Keyboard support for accordions
    header.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        header.click();
      }
    });
  });

  // =========================================================================
  // CONTACT FORM VALIDATION
  // =========================================================================
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    // Real-time validation
    const formInputs = contactForm.querySelectorAll('input, select, textarea');

    formInputs.forEach(function(input) {
      input.addEventListener('blur', function() {
        validateField(input);
      });

      input.addEventListener('input', function() {
        // Clear error on input
        const formGroup = input.closest('.form-group');
        if (formGroup && formGroup.classList.contains('error')) {
          formGroup.classList.remove('error');
          const errorMessage = formGroup.querySelector('.error-message');
          if (errorMessage) {
            errorMessage.textContent = '';
          }
        }
      });
    });

    // Form submission
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Validate all fields
      let isValid = true;
      const formGroups = contactForm.querySelectorAll('.form-group');

      formGroups.forEach(function(group) {
        const input = group.querySelector('input, select, textarea');
        if (input && !validateField(input)) {
          isValid = false;
        }
      });

      if (isValid) {
        // Submit the form
        contactForm.submit();
      } else {
        // Focus on first error
        const firstError = contactForm.querySelector('.form-group.error input, .form-group.error select, .form-group.error textarea');
        if (firstError) {
          firstError.focus();
        }
      }
    });
  }

  /**
   * Validate individual form field
   */
  function validateField(input) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) return true;

    const errorMessage = formGroup.querySelector('.error-message');
    let isValid = true;
    let message = '';

    // Check if required
    if (input.hasAttribute('required') && !input.value.trim()) {
      isValid = false;
      message = 'This field is required';
    }

    // Email validation
    if (input.type === 'email' && input.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value.trim())) {
        isValid = false;
        message = 'Please enter a valid email address';
      }
    }

    // Phone validation (basic)
    if (input.type === 'tel' && input.value.trim()) {
      const phoneRegex = /^[\d\s\-\(\)\+]+$/;
      if (!phoneRegex.test(input.value.trim()) || input.value.trim().length < 10) {
        isValid = false;
        message = 'Please enter a valid phone number';
      }
    }

    // Select validation
    if (input.tagName === 'SELECT' && input.hasAttribute('required') && !input.value) {
      isValid = false;
      message = 'Please select an option';
    }

    // Update UI
    if (!isValid) {
      formGroup.classList.add('error');
      if (errorMessage) {
        errorMessage.textContent = message;
      }
    } else {
      formGroup.classList.remove('error');
      if (errorMessage) {
        errorMessage.textContent = '';
      }
    }

    return isValid;
  }

  // =========================================================================
  // LAZY LOADING IMAGES
  // =========================================================================
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imageObserver.unobserve(img);
        }
      });
    });

    // Observe all images with loading="lazy"
    document.querySelectorAll('img[loading="lazy"]').forEach(function(img) {
      imageObserver.observe(img);
    });
  }

  // =========================================================================
  // EXTERNAL LINKS - OPEN IN NEW TAB
  // =========================================================================
  const externalLinks = document.querySelectorAll('a[href^="http"]');

  externalLinks.forEach(function(link) {
    const currentDomain = window.location.hostname;

    if (!link.href.includes(currentDomain) && !link.hasAttribute('target')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // =========================================================================
  // ACCESSIBILITY: SKIP LINK FOCUS FIX
  // =========================================================================
  const skipLink = document.querySelector('.skip-link');

  if (skipLink) {
    skipLink.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.setAttribute('tabindex', '-1');
        target.focus();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }

  // =========================================================================
  // FORM AUTOFILL DETECTION (for better UX)
  // =========================================================================
  if (contactForm) {
    // Detect browser autofill
    const detectAutofill = function() {
      formInputs.forEach(function(input) {
        if (input.matches(':-webkit-autofill')) {
          const formGroup = input.closest('.form-group');
          if (formGroup) {
            formGroup.classList.add('has-value');
          }
        }
      });
    };

    // Check periodically for autofill
    setTimeout(detectAutofill, 100);
    setTimeout(detectAutofill, 500);
  }

  // =========================================================================
  // PRINT FRIENDLY
  // =========================================================================
  window.addEventListener('beforeprint', function() {
    // Expand all accordions before printing
    document.querySelectorAll('.accordion-item').forEach(function(item) {
      item.classList.add('active');
    });
  });

  window.addEventListener('afterprint', function() {
    // Collapse all accordions after printing
    document.querySelectorAll('.accordion-item').forEach(function(item) {
      item.classList.remove('active');
    });
  });

  // =========================================================================
  // ANALYTICS PLACEHOLDER
  // =========================================================================
  // Google Analytics would be loaded here
  // Example:
  // window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments);}
  // gtag('js', new Date());
  // gtag('config', 'GA_MEASUREMENT_ID');

  // =========================================================================
  // CONSOLE MESSAGE (OPTIONAL - CAN BE REMOVED IN PRODUCTION)
  // =========================================================================
  console.log('%c🏥 Precision Wound Management', 'color: #2E5B8A; font-size: 16px; font-weight: bold;');
  console.log('%cFocused Healing. Expert Care.', 'color: #6C757D; font-size: 12px; font-style: italic;');
  console.log('%c© 2025 Precision Wound Management, PLLC', 'color: #6C757D; font-size: 10px;');

})();
