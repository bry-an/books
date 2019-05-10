import { mount } from "@vue/test-utils"
import Vuetify from "vuetify"
import MyBooks from "../../src/components/MyBooks.vue"
import Vue from "vue"
Vue.use(Vuetify)

describe("My Books", () => {
    let build
    build = () => {
        const books = [{
            title: "",
            author_name: [""],
            first_publish_year: 0
        }]

        const wrapper = mount(MyBooks, {
            propsData: {
                books
            }
        })
        return {
            wrapper
        }
    }
    it("renders the component", () => {
        const { wrapper } = build()
        expect(wrapper.html()).toMatchSnapshot()
    })
    it("displays books", () => {
        const { wrapper } = build()
        const td = wrapper.find("td")
        expect(td.exists()).toBe(true)
    })
})