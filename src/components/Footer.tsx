interface FooterLink {
  label: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  { label: "이용약관", href: "#" },
  { label: "개인정보처리방침", href: "#" },
  { label: "환불정책", href: "#" },
];

export default function Footer(): React.ReactElement {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
          <div>
            <span className="font-bold text-xl tracking-tighter">
              Vibe<span className="text-yellow-500">Coding</span>
            </span>
            <p className="text-zinc-500 text-sm mt-2">
              AI와 함께하는 새로운 개발 교육 프로그램
            </p>
          </div>

          <div className="flex gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-zinc-400 text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <p className="text-zinc-600 text-sm text-center border-t border-zinc-800 pt-8">
          &copy; 2026 Vibe Coding. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
