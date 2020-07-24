require('./index');

describe('parseInt', () => {
  it('should obviously return 100 for 💯', () => {
    expect(parseInt('💯')).toBe(100);
  });

  it('should probably return 19 for 🔞', () => {
    expect(parseInt('🔞')).toBe(19);
  });

  it('should obviously return 1 for 1️', () => {
    expect(parseInt('1️')).toBe(1);
  });

  it('should obviously return 2 for 2️', () => {
    expect(parseInt('2️')).toBe(2);
  });

  it('should obviously return 3 for 3️⃣', () => {
    expect(parseInt('3️⃣')).toBe(3);
  });

  it('should obviously return 4 for 4️⃣', () => {
    expect(parseInt('4️⃣')).toBe(4);
  });

  it('should obviously return 5 for 5️⃣', () => {
    expect(parseInt('5️⃣')).toBe(5);
  });

  it('should obviously return 6 for 6️⃣', () => {
    expect(parseInt('6️⃣')).toBe(6);
  });

  it('should obviously return 7 for 7️⃣', () => {
    expect(parseInt('7️⃣')).toBe(7);
  });

  it('should obviously return 8 for 8️⃣', () => {
    expect(parseInt('8️⃣')).toBe(8);
  });

  it('should obviously return 9 for 9️⃣', () => {
    expect(parseInt('9️⃣')).toBe(9);
  });

  it('should obviously return 10 for 🔟', () => {
    expect(parseInt('🔟')).toBe(10);
  });

  it('should obviously return 12 for 1️2️', () => {
    expect(parseInt('1️2️')).toBe(12);
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
