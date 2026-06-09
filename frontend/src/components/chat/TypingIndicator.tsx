interface Props {
  visible: boolean;
}

export default function TypingIndicator({ visible }: Props) {
  if (!visible) {
    return null;
  }

  return <p className="text-sm text-zinc-500">Typing...</p>;
}
