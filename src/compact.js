export function compact(array) {
  // যদি ইনপুট অ্যারে না হয় বা খালি হয়, তবে খালি অ্যারে রিটার্ন করবে
  if (!Array.isArray(array)) return [];

  // Boolean কনস্ট্রাক্টরটি নিজে থেকেই সব Falsy ভ্যালু ছেঁকে বাদ দিয়ে দেয়
  return array.filter(Boolean);
}