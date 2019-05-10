import { mount } from "@vue/test-utils"
import Vuetify from "vuetify"
import SearchInput from "../../src/components/SearchInput.vue"
import Vue from "vue"
Vue.use(Vuetify)
import flushPromises from "flush-promises"

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


    // it("fetches book data from api", async () => { const { wrapper, button, input } = build()

    //     console.log(wrapper.mocks)

    //     input().setValue("hemmingway")
    //     button().trigger('click')
    //     await flushPromises()
    //     expect(wrapper.emitted("set-results")).toBeTruthy()
    // })
})


/*
        const mockResponse = {}
        const mockJsonPromise = Promise.resolve(mockResponse)
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise
        })
        */