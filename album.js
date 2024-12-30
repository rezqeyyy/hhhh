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
          img1: "images/pngtree-coming-soon-flat-blue-png-image_6863531.png",
          img2: "images/pngtree-coming-soon-flat-blue-png-image_6863531.png", 
          img3: "images/pngtree-coming-soon-flat-blue-png-image_6863531.png",
          title: "SOON",
          isOpen: false,
        },
        {
          img1: "images/pngtree-coming-soon-flat-blue-png-image_6863531.png",
          img2: "images/pngtree-coming-soon-flat-blue-png-image_6863531.png",
          img3: "images/pngtree-coming-soon-flat-blue-png-image_6863531.png",
          title: "SOON",
          isOpen: false,
        },
        {
          img1: "images/pngtree-coming-soon-flat-blue-png-image_6863531.png",
          img2: "images/pngtree-coming-soon-flat-blue-png-image_6863531.png",
          img3: "images/pngtree-coming-soon-flat-blue-png-image_6863531.png",
          title: "SOON",
          isOpen: false,
        },
        {
          img1: "images/pngtree-coming-soon-flat-blue-png-image_6863531.png",
          img2: "images/pngtree-coming-soon-flat-blue-png-image_6863531.png",
          img3: "images/pngtree-coming-soon-flat-blue-png-image_6863531.png",
          title: "SOON",
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