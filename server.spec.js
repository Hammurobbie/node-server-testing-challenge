const request = require("supertest");

const server = require("./server");

describe("server.js", () => {
  describe("schemes route", () => {
    it("should return an OK status code from the schemes route", () => {
      const expectedStatusCode = 200;

      let response;
      return request(server)
        .get("/schemes")
        .then(res => {
          response = res;

          expect(response.status).toEqual(expectedStatusCode);
        });
    });

    it("should return a JSON object from the schemes route", async () => {
      const response = await request(server).get("/schemes");

      expect(response.type).toEqual("application/json");
    });

    describe("delete requests", () => {
      it("should return a OK status upon succesful delete request", async () => {
        const response = await request(server).delete("/schemes/2");

        expect(response.status).toEqual(200);
      });

      it("should return an json message after succesful delete", () => {
        let response;
        return request(server)
          .delete("/schemes/2")
          .then(res => {
            response = res;

            expect(response.type).toEqual("application/json");
          });
      });
    });

    describe("post requests", () => {
      it("should return a 404 status after posting without body", async () => {
        const response = await request(server).post("/schemes/");

        expect(response.status).toEqual(404);
      });

      it("should return an json message after post", () => {
        let response;
        return request(server)
          .post("/schemes")
          .then(res => {
            response = res;

            expect(response.type).toEqual("application/json");
          });
      });
    });
  });
});
