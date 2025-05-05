class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function removeNthFromEnd(head: ListNode, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let l: ListNode = dummy;
  let r: ListNode | null = head;

  while (n > 0 && r !== null) {
    r = r.next;
    n--;
  }

  while (r !== null) {
    l = l.next!;
    r = r.next;
  }

  if (l.next !== null) {
    l.next = l.next.next;
  }

  return dummy.next;
}

export {};
