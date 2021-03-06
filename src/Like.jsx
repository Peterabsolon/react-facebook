import React, { PropTypes } from 'react';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';
import LikeSize from './constants/LikeSize';
import LikeLayout from './constants/LikeLayout';
import ColorScheme from './constants/ColorScheme';
import LikeAction from './constants/LikeAction';

export default class Like extends Parser {
  static propTypes = {
    ...Parser.propTypes,
    referral: PropTypes.string,
    href: PropTypes.string,
    layout: PropTypes.string.isRequired,
    showFaces: PropTypes.bool.isRequired,
    colorScheme: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    share: PropTypes.bool.isRequired,
    children: PropTypes.node,
    width: PropTypes.oneOfType([
      PropTypes.number.isRequired,
      PropTypes.string.isRequired,
    ]),
    size: PropTypes.string,
    kidDirectedSite: PropTypes.bool.isRequired,
  };

  static contextTypes = {
    ...Parser.contextTypes,
  };

  static defaultProps = {
    layout: LikeLayout.STANDARD,
    showFaces: false,
    colorScheme: ColorScheme.LIGHT,
    action: LikeAction.LIKE,
    share: false,
    size: LikeSize.SMALL,
    kidDirectedSite: false,
  };

  renderComponent() {
    const {
      href = getCurrentHref(),
      layout,
      colorScheme,
      action,
      showFaces,
      share,
      children,
      width,
      size,
      kidDirectedSite,
      referral,
    } = this.props;

    return (
      <div
        className="fb-like"
        data-ref={referral}
        data-href={href}
        data-layout={layout}
        data-colorscheme={colorScheme}
        data-action={action}
        data-show-faces={showFaces}
        data-share={share}
        data-width={width}
        data-size={size}
        data-kid-directed-site={kidDirectedSite}
      >
        {children}
      </div>
    );
  }
}
