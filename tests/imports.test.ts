describe("import vue components", () => {
    test("normal imports as expected", async () => {
        const comp = await import("../components/AboutSection.vue")
        expect(comp).toBeDefined()
    })
})