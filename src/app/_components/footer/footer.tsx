import { Footer } from '@/types/footer';
import { getPageBySlug } from '@/lib/api';
import FooterClient from './FooterClient';

export default function FooterSection() {
  const footerContent: Footer = getPageBySlug('footer.json');
  return <FooterClient footerContent={footerContent} />;
}
