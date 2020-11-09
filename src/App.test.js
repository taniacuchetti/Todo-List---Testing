import App from "./App";
import React from "react";
import { mount } from "enzyme";

describe("App component", () => {
  it("Content should render correctly", () => {
    const component = mount(<App />);

    const input = component.find("input");
    const button = component.find("button");
    input.simulate("change", { target: { value: "Hola" } });
    button.simulate("click");
    const list = component.find("li");
    expect(list.text()).toBe("Hola");
  });

  it("Should add task", () => {
    const component = mount(<App />);

    const input = component.find("input");
    const button = component.find("button");
    const oldList = component.find("li");
    input.simulate("change", { target: { value: "Hola" } });
    button.simulate("click");
    const newList = component.find("li");
    expect(newList).toHaveLength(oldList.length + 1);
  });

  it("Should not add empty task", () => {
    const component = mount(<App />);

    console.log(component.debug());

    const input = component.find("input");
    const button = component.find("button");
    const oldList = component.find("li");
    input.simulate("change", { target: { value: "" } });
    button.simulate("click");
    const newList = component.find("li");

    expect(oldList.length).toEqual(newList.length);
  });

  it("Input should clean its value after adding a task", () => {
    const component = mount(<App />);

    const input = component.find("input");
    const button = component.find("button");
    input.simulate("change", { target: { value: "Hola" } });
    button.simulate("click");
    expect(input.text()).toBe("");
  });
});