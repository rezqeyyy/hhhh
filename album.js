new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/IMG-20241230-WA0204.jpg",
          img2: "images/IMG-20241230-WA0209.jpg",
          img3: "images/IMG-20241230-WA0208.jpg",
          title: "CINEMA",
          isOpen: false,
        },
        {
          img1: "images/WhatsApp Image 2025-02-11 at 22.53.14_acdf161b.jpg",
          img2: "images/WhatsApp Image 2025-02-11 at 22.53.16_b61e10a8.jpg",
          img3: "images/WhatsApp Image 2025-02-11 at 22.53.17_5d36e505.jpg",
          title: "MAM AYAM",
          isOpen: false,
        },
        {
          img1: "images/es2.jpg",
          img2: "images/es3.jpg",
          img3: "images/es5.jpg",
          title: "ES KRIM",
          isOpen: false,
        },
        {
          img1: "images/jln.jpg",
          img2: "images/jln2.jpg",
          img3: "images/jln3.jpg",
          title: "JALAN JALAN",
          isOpen: false,
        },
        {
          img1: "images/WhatsApp Image 2025-03-24 at 23.44.15_073e4d2e.jpg",
          img2: "images/WhatsApp Image 2025-03-24 at 23.44.15_221a02a1.jpg",
          img3: "images/WhatsApp Image 2025-03-24 at 23.44.21_e1b6a06e.jpg",
          title: "MAKAN MAKAN",
          isOpen: false,
        },
        {
          img1: "images/pngtree-coming-soon-flat-blue-png-image_6863531.png",
          img2: "images/pngtree-coming-soon-flat-blue-png-image_6863531.png", 
          img3: "images/pngtree-coming-soon-flat-blue-png-image_6863531.png",
          title: "SOON",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach(item => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});