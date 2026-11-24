export default function ServiceArtwork({ image, tone, detail = false }: {
  image: string;
  tone?: "sand" | "rose" | "sage";
  detail?: boolean;
}) {
  return (
    <div className={`service-artwork${detail ? " service-artwork-detail" : ""}`} data-tone={tone}>
      <img src={image} alt="" width={160} height={240} loading={detail ? "eager" : "lazy"} />
    </div>
  );
}
