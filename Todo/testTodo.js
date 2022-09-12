const { expect } = require("chai");

describe("todo", function () {
  let data, data1;

  beforeEach(async () => {
    const Todo = await ethers.getContractFactory("Todo");
    const todo = await Todo.deploy();
    await todo.deployed();
    data = todo;
  });

  it("Set the Todo and Get the Todo", async function () {
    await data.setTodo("Learn JS");
    await data.setTodo("Learn Solidity");
    await data.setTodo("Learn ReactJS");

    const [getTodo, ...rest] = await data.getTodo();
    console.log("Todos: ", getTodo);
    console.log("Rest Todos: ", rest);
    expect(getTodo).to.equal("Learn JS");
    data1 = data;
  });

  it("Get the length of Todos", async function () {
    const getLength = await data1.getTodosLength();
    expect(Number(getLength)).to.equal(3);
  });

  it("deleted the task in the todo list...and get the update length of the Todo list", async function () {
    await data1.deleteToDo(1);
    expect(Number(await data1.getTodosLength())).to.equal(2);
  });
});
