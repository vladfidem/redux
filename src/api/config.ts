interface ConfigProps {
  apiUrl?: string
}

export const config: ConfigProps = {
  apiUrl: import.meta.env.VITE_API_URL,
}
