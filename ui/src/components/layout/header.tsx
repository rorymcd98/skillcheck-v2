import Image from 'next/image';
import Link from 'next/link';
import {
  EuiHeader,
  EuiTitle,
  EuiHeaderSectionItemButton,
  useEuiTheme,
  EuiToolTip,
  EuiIcon,
} from '@elastic/eui';
import { imageLoader } from '../../lib/loader';
import ThemeSwitcher from './theme_switcher';
import { headerStyles } from './header.styles';
import Logo from '../../../public/images/logo-eui.svg';

const Header = () => {
  const { euiTheme } = useEuiTheme();
  const href = 'https://github.com/rorymcd98/skillcheck-v2';
  const label = 'Skillcheck-v2 repo';
  const styles = headerStyles(euiTheme);

  return (
    <EuiHeader
      position="fixed"
      sections={[
        {
          items: [
            <Link key="logo-eui" href="/" passHref css={styles.logo}>
              <Image
                width={24}
                height={24}
                src={Logo}
                alt=""
                loader={imageLoader}
              />
              <EuiTitle size="xxs" css={styles.title}>
                <span>Skillcheck v2.</span>
              </EuiTitle>
            </Link>,
          ],
          borders: 'none',
        },
        {
          items: [
            <ThemeSwitcher key="theme-switcher" />,
            <EuiToolTip content="Github" key="github">
              <EuiHeaderSectionItemButton aria-label={label} href={href}>
                <EuiIcon type="logoGithub" aria-hidden="true" />
              </EuiHeaderSectionItemButton>
            </EuiToolTip>,
          ],
          borders: 'none',
        },
      ]}
    />
  );
};

export default Header;
