function mediaCA(nota) {
  if (nota >= 9.0 && nota <= 10) {
    return "SS - Superior";
  } else if (nota >= 7.0 && nota < 9.0) {
    return "MS - Médio Superior";
  } else if (nota >= 5.0 && nota < 7.0) {
    return "MM - Médio";
  } else if (nota >= 3.0 && nota < 5.0) {
    return "MI - Médio Inferior";
  } else if (nota >= 0.1 && nota < 3.0) {
    return "II - Inferior";
  } else if (nota === 0.0) {
    return "SR - Sem rendimento";
  } else {
    throw new Error(
      "Nota inválida. Certifique-se de que a nota esteja dentro da escala."
    );
  }
}

test("Retorna o conceito corretamente com base na nota", () => {
  expect(mediaCA(9.5)).toBe("SS - Superior");
  expect(mediaCA(7.8)).toBe("MS - Médio Superior");
  expect(mediaCA(5.5)).toBe("MM - Médio");
  expect(mediaCA(4.2)).toBe("MI - Médio Inferior");
  expect(mediaCA(2.0)).toBe("II - Inferior");
  expect(mediaCA(0.0)).toBe("SR - Sem rendimento");
});

test("Lança um erro para nota inválida", () => {
  expect(() => mediaCA(-1)).toThrow(
    "Nota inválida. Certifique-se de que a nota esteja dentro da escala."
  );
});
