require('./index');

describe('parseInt', () => {
  it('should obviously return 100 for 💯', () => {
    expect(parseInt('💯')).toBe(100);
  });

  it('should probably return 19 for 🔞', () => {
    expect(parseInt('🔞')).toBe(19);
  });

  it('should obviously return 9876543210 for 9️⃣8️⃣7️⃣6️⃣5️⃣4️⃣3️⃣2️⃣1️⃣0️⃣', () => {
    expect(parseInt('9️⃣8️⃣7️⃣6️⃣5️⃣4️⃣3️⃣2️⃣1️⃣0️⃣')).toBe(9876543210);
  });

  it('should obviously return 1 for 🥇', () => {
    expect(parseInt('🥇')).toBe(1);
  });

  it('should obviously return 2 for 🥈', () => {
    expect(parseInt('🥈')).toBe(2);
  });

  it('should obviously return 3 for 🥉', () => {
    expect(parseInt('🥉')).toBe(3);
  });

  it('should obviously return 110027 for 1💯🥈7️⃣', () => {
    expect(parseInt('1💯🥈7️⃣')).toBe(110027);
  });
});

describe('parseFloat', () => {
  it('should obviously return 0.1 for 0.💯', () => {
    expect(parseFloat('0.💯')).toBe(0.1);
  });

  it('should probably return 0.19 for 0.🔞', () => {
    expect(parseFloat('0.🔞')).toBe(0.19);
  });

  it('should obviously return 0.987654321 for 0️⃣.9️⃣8️⃣7️⃣6️⃣5️⃣4️⃣3️⃣2️⃣1️⃣', () => {
    expect(parseFloat('0️⃣.9️⃣8️⃣7️⃣6️⃣5️⃣4️⃣3️⃣2️⃣1️⃣')).toBe(0.987654321);
  });

  it('should obviously return 0.1 for 0.🥇', () => {
    expect(parseFloat('0.🥇')).toBe(0.1);
  });

  it('should obviously return 0.2 for 0.🥈', () => {
    expect(parseFloat('0.🥈')).toBe(0.2);
  });

  it('should obviously return 0.3 for 0.🥉', () => {
    expect(parseFloat('0.🥉')).toBe(0.3);
  });

  it('should obviously return 1100.27 for 1💯.🥈7️⃣', () => {
    expect(parseFloat('1💯.🥈7️⃣')).toBe(1100.27);
  });
});
