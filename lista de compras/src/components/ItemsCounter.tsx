export function ItemsCounter({ total }: { total: number }) {
  return (
    <span style={{ fontSize: 20 }}>
      Total de itens: {total}
      <br />
    </span>
  );
}
