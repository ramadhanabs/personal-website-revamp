export const formatRupiah = (value: number | null | undefined) => {
  if (!value && value !== 0) return ""
  const formattedValue = new Intl.NumberFormat(`id-ID`, {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(value)

  return `IDR ${formattedValue}`
}
