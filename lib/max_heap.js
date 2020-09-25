class MaxHeap {
  constructor(){
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChild(idx){
    return idx * 2;
  }

  getRightChild(idx){
    return idx * 2 + 1;
  }

  insert(val){
    this.array.push(val);
    this.siftUp(this.array.length - 1)
  }

  siftUp(idx){
    if (idx === 1) return;

    let parentIdx = this.getParent (idx);
    if(this.array[idx] > this.array[parentIdx]){
      [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];
      this.siftUp(parentIdx);
    }
  }
  deleteMax(){
    if(this.array.length === 2) return this.array.pop();
    if(this.array.length === 1) return null;

    let max = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1);
    return max;
  }

  siftDown(idx){
    let leftIdx = idx * 2;
    let rightIdx = idx * 2 + 1;
    let ary = this.array;
    let leftVal = ary[leftIdx];
    let rightVal = ary[rightIdx];
    let val = ary[idx];

    if(leftVal === undefined) leftVal = -Infinity;
    if(rightVal === undefined) rightVal = -Infinity;

    if (val > leftVal && val > rightVal) return;

      let swapIdx;
    if(leftVal > rightVal){
      swapIdx = leftIdx;
    }else{
      swapIdx = rightIdx;
    }
    [ ary[swapIdx], ary[idx] ] = [ ary[idx], ary[swapIdx] ];
      this.siftDown(swapIdx);
  }

}

module.exports = {
  MaxHeap
};
