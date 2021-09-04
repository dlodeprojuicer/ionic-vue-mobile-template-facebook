import { createStore } from "vuex";

const store = createStore({
  state: {
    posts: [
      {
        name: "Snoop Dogg",
        image: "assets/images/brazil.jpg",
        pic: "assets/images/snoop.png",
        id: 1,
        likes: 22349,
        description:
          "All about Brazil, suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor."
      },
      {
        name: "Brooke Shaden",
        image: "assets/images/hawaii.jpg",
        id: 3
      },
      {
        name: "Makazole Mapimpi",
        image: "assets/images/panama.jpg",
        pic: "assets/images/makazole.png",
        id: 2,
        likes: 390,
        description:
          "all about panama. Nam fermentum, leo ac lobortis tincidunt, justo felis semper nisi, sed facilisis quam ante a justo. Nam pulvinar nibh nec mi vestibulum cursus quis eget orci. Aenean faucibus faucibus ex, a imperdiet nibh luctus faucibus. Mauris porttitor, velit ac eleifend mattis, sem justo accumsan odio, ut mattis nulla nulla eu nibh."
      },
      {
        name: "Lewis Hamilton",
        slug: "jamaica",
        image: "assets/images/jamaica.jpg",
        pic: "assets/images/lewis.png",
        id: 4
      },
    ],
    stories: [
      {
        name: "makazole",
        image: "assets/images/makazole.png"
      },
      {
        name: "jay-z",
        image: "assets/images/jay-z.jpg"
      },
      {
        name: "lewis",
        image: "assets/images/lewis.png"
      },
      {
        name: "snoop",
        image: "assets/images/snoop.png"
      },
      {
        name: "max",
        image: "assets/images/max.png"
      }
    ]
  },

  getters: {
    posts({ posts }) {
      return posts;
    },
    stories({ stories }) {
      return stories;
    }
  },
  mutations: {},
  actions: {},
});

export default store;
