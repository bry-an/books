
import { mount } from "@vue/test-utils"
import Vuetify from "vuetify"
import BookView from "../../src/views/BookView.vue"
import Vue from "vue"
Vue.use(Vuetify)

describe("Book View", () => {
    let build
    build = () => {

        const wrapper = mount(BookView, {
            mocks: {
                $route: {
                    params: {
                        title: "",
                        author_name: [""],
                        first_publish_year: 0,
                        isbn: [0]
                    }
                }
            }
        })
        wrapper.vm.$route.params = {
            title: "",
            author_name: [""],
            first_publish_year: 0,
            isbn: [0]
        }
        return {
            wrapper
        }
    }
    it("renders the page", () => {
        const { wrapper } = build()
        expect(wrapper.html()).toMatchSnapshot()
    })
    it("displays book information", () => {
        const { wrapper } = build()
        const bookTitle = wrapper.find(".title")
        expect(bookTitle.exists()).toBe(true)
    })
})
