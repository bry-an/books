import { mount } from "@vue/test-utils"
import Vuetify from "vuetify"
import SearchInput from "../../src/components/SearchInput.vue"
import Vue from "vue"
Vue.use(Vuetify)

describe("SearchInput", () => {
    let build
    build = () => {
        const wrapper = mount(SearchInput)
        return {
            wrapper,
            input: () => wrapper.find("input[type='text']"),
            button: () => wrapper.find("button")
        }
    }
    it("renders the component", () => {
        const { wrapper } = build()
        expect(wrapper.html()).toMatchSnapshot()
    })
})

