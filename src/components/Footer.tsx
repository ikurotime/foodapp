import DiscordFooterLogo from '@/img/DiscordFooterLogo'
import FooterLogo from '@/img/FooterLogo'
import GithubFooterLogo from '@/img/GithubFooterLogo'
import InstagramFooterLogo from '@/img/InstagramFooterLogo'
import TwitterFooterLogo from '@/img/TwitterFooterLogo'
import YoutubeFooterLogo from '@/img/YoutubeFooterLogo'

export default function Footer() {
  return (
    <div className='flex flex-col gap-12 w-full bg-[#332C45] h-80 p-10 justify-center items-center'>
      <FooterLogo />
      <div className='flex gap-24'>
        <DiscordFooterLogo />
        <GithubFooterLogo />
        <TwitterFooterLogo />
        <InstagramFooterLogo />
        <YoutubeFooterLogo />
      </div>
    </div>
  )
}
