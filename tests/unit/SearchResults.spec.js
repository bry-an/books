import { shallowMount, mount } from "@vue/test-utils"
import Vuetify from "vuetify"
import SearchResults from "../../src/components/SearchResults.vue"
import Vue from "vue"
Vue.use(Vuetify)

describe("Search Results", () => {
    let build
    build = () => {
        const responseObj = {
            numOfResults: 1,
            results: [
                {
                    title: "",
                    author_name: [""],
                    first_publish_year: 0
                }
            ]
        }
        const wrapper = mount(SearchResults, {
            propsData: {
                results: responseObj
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
    it("renders search results", () => {
        const { wrapper } = build()
        const td = wrapper.find("td")
        expect(td.exists()).toBe(true)
    })
})