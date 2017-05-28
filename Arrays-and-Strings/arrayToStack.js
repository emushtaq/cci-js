// Single array to implement 3 stacks
class Stack {
  constructor(size1, size2, size3) {
    this.stackSizes = [size1, size2, size3];
    this.totalSize = size1 + size2 + size3;
    this.stack = new Array(this.totalSize);
    this.stackPointers = [-1, -1, -1];
  }

  push(element, stack) {// stack can be 1,2,3
    switch(stack) {
      case 1: // 0
        if(this.stackPointers[0] === this.stackSizes[0]-1) { // stackoverflow
          console.log("ERROR. Stack overflow!")
        } else {
          this.stackPointers[0]++;
          this.stack[this.stackPointers[0]] = element;
        } 
        break;
      
      case 2: // 1
        if(this.stackPointers[1] === this.stackSizes[1]-1) { // stackoverflow
          console.log("ERROR. Stack overflow!")
        } else {
          this.stackPointers[1]++;
          this.stack[this.stackSizes[0] + this.stackPointers[1]] = element;
        }
        break;
      
      case 3: // 2
        if(this.stackPointers[2] === this.stackSizes[2]-1) { // stackoverflow
          console.log("ERROR. Stack overflow!")
        } else {
          this.stackPointers[2]++;
          this.stack[this.stackSizes[0] + this.stackSizes[1] + this.stackPointers[2]] = element;
        }
        break;
      
      default: console.log("Error. Something went wrong. Check if you have provided the right stack number.")
    }
  }

  pop(element, stack) {
    let popped;
    switch(stack) {
      case 1: // 0
        if(this.stackPointers[0] === -1) { // stack is empty
          console.log("ERROR. Stack is empty!")
        } else {
          popped = this.stack[this.stackPointers[0]];
          this.stack[this.stackPointers[0]] = undefined;
          this.stackPointers[0]--;
        } 
        break;
      
      case 2: // 1
        if(this.stackPointers[1] === -1) { // stack is empty
          console.log("ERROR. Stack is empty!")
        } else {
          popped = this.stack[this.stackSizes[0] + this.stackPointers[1]];
          this.stack[this.stackSizes[0] +this.stackPointers[1]] = undefined;
          this.stackPointers[1]--;
        }
        break;
      
      case 3: // 2
        if(this.stackPointers[2] === -1) { // stack is empty
          console.log("ERROR. Stack is empty!")
        } else {
          popped = this.stack[this.stackSizes[0] + this.stackSizes[1] + this.stackPointers[2]];
          this.stack[this.stackSizes[0] + this.stackSizes[1] + this.stackPointers[2]] = undefined;
          this.stackPointers[2]--;
        }
        break;
      
      default: console.log("Error. Something went wrong. Check if you have provided the right stack number.")
    }
  }
}


function array2Stack(size1, size2, size3) {
  return new Stack(size1, size2, size3)
}