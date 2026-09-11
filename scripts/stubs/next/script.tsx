export default function Script({ id, children }: { id?: string; strategy?: string; children?: string }) {
  return <script id={id} dangerouslySetInnerHTML={{ __html: children ?? "" }} />;
}
