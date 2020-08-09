// You are given two non-empty linked lists representing two non-negative integers. 
//The digits are stored in reverse order and each of their nodes contain a single digit. 
//Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let head = new ListNode(0);
    let node = head;
    let carry = 0;
    
    while(l1 || l2){
        
        let l1Value = l1 ? l1.val : 0;
        let l2Value = l2 ? l2.val : 0;
        
        let sum = l1Value + l2Value + carry;
        carry = 0;
        let newValue = sum;
        
        if (sum > 9){
            newValue = sum % 10;
            carry = 1;
        }
        
        node.next = new ListNode(newValue);
        node = node.next;
        
        if(l1){
            l1 = l1.next;
        }
        
        if(l2){
            l2 = l2.next;
        }
    }
    
    if(carry){
        node.next = new ListNode(carry);
    }
    return head.next;
    
};