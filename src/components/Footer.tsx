import DiscordFooterLogo from '@/img/DiscordFooterLogo';
import FooterLogo from '@/img/FooterLogo';
import GithubFooterLogo from '@/img/GithubFooterLogo';
import InstagramFooterLogo from '@/img/InstagramFooterLogo';
import TwitterFooterLogo from '@/img/TwitterFooterLogo';
import YoutubeFooterLogo from '@/img/YoutubeFooterLogo';

export default function Footer() {
  return (
    <div className=' flex w-full flex-col items-center justify-center gap-6 bg-[#332C45] p-10'>
      <FooterLogo />
      <div className='flex scale-50 items-center gap-24'>
        <DiscordFooterLogo />
        <GithubFooterLogo />
        <TwitterFooterLogo />
        <InstagramFooterLogo />
        <YoutubeFooterLogo />
      </div>
    </div>
  );
}
