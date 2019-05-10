import { shallowMount } from "@vue/test-utils"
import Vuetify from "vuetify"
import Home from "../../src/views/Home.vue"
import MyBooks from "../../src/components/MyBooks.vue"
import SearchInput from "../../src/components/SearchInput.vue"
import SearchResults from "../../src/components/SearchResults.vue"
import Vue from "vue"
Vue.use(Vuetify)

describe("Home", () => {
    let build
    build = () => {
        const books = [{
            title: "",
            author_name: [""],
            first_publish_year: 0
        }]
        const wrapper = shallowMount(Home)
        wrapper.setData({
            myBooks: books,
            results: { books }
        })
        return { wrapper }
    }

    it("renders the component", () => {
        const { wrapper } = build()
        expect(wrapper.html()).toMatchSnapshot()
    })
    it("contains search input, results, and mybooks components", () => {
        const { wrapper } = build()
        expect(wrapper.contains(MyBooks)).toBe(true)
        expect(wrapper.contains(SearchInput)).toBe(true)
        expect(wrapper.contains(SearchResults)).toBe(true)
    })
})