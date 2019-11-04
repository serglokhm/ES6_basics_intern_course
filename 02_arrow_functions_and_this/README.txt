
- First it checks whether the function is called with new keyword.
- Second it checks whether the function is called with call or apply method means explicit binding.
- Third it checks if the function called via context object (implicit binding).
- Default global object (undefined in case of strict mode).
