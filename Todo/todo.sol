// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "hardhat/console.sol";

contract Todo {
    
    string[] public todos;
    uint public length;

    function setTodo(string memory _todo) public {
        length = length + 1;
        todos.push(_todo);
    }

    function getTodo() public view returns(string[] memory) {
        return todos;
    }

    function getTodosLength() public view returns(uint) {   
        console.log("Todos Length",length);
        return length;
    }

    function deleteToDo(uint _index) public {
        require(_index < getTodosLength(), "This todo index does not exist.");
        todos[_index] = todos[getTodosLength() - 1];
        console.log('todos before deleting : ', todos[0], todos[1], todos[2]);
        todos.pop();
        length = length - 1;
    }

}
