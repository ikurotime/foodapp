import DiscordFooterLogo from '@/img/DiscordFooterLogo';
import FooterLogo from '@/img/FooterLogo';
import GithubFooterLogo from '@/img/GithubFooterLogo';
import InstagramFooterLogo from '@/img/InstagramFooterLogo';
import TwitterFooterLogo from '@/img/TwitterFooterLogo';
import YoutubeFooterLogo from '@/img/YoutubeFooterLogo';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className=' flex w-full flex-col items-center justify-center gap-6 bg-[#332C45] p-10'>
      <FooterLogo />
      <div className='flex scale-50 items-center gap-24'>
        <Link href='https://discord.gg/3sWGgBzXQd' target='_blank'>
          <DiscordFooterLogo />
        </Link>
        <Link href='https://github.com/ikurotime/foodapp' target='_blank'>
          <GithubFooterLogo />
        </Link>
        <Link href='https://twitter.com/ikurotime' target='_blank'>
          <TwitterFooterLogo />
        </Link>
        <Link href='https://instagram.com/ikurotime' target='_blank'>
          <InstagramFooterLogo />
        </Link>
        <Link href='https://youtube.com/@ikurotime' target='_blank'>
          <YoutubeFooterLogo />
        </Link>
      </div>
    </div>
  );
}
