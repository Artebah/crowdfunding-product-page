import React from "react";
import classNames from "classnames";
import styles from "../../styles/modules/Button.module.scss";

import BookmarkIcon from "../../images/icon-bookmark.svg";
import BookmarkedIcon from "../../images/icon-bookmarked.svg";

interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  isBookmarked?: boolean;
  isBookmarkStyle?: boolean;
  disabled?: boolean;
}
export function Button(props: ButtonProps) {
  const {
    children,
    onClick,
    isBookmarked = false,
    isBookmarkStyle = false,
    disabled = false,
  } = props;

  let bookmarkContent;

  if (isBookmarked) {
    bookmarkContent = (
      <>
        <img src={BookmarkedIcon} alt="bookmarked icon" />
        <span>Bookmarked</span>
      </>
    );
  } else {
    bookmarkContent = (
      <>
        <img src={BookmarkIcon} alt="bookmark icon" />
        <span>Bookmark</span>
      </>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classNames(
        styles.button,
        { [styles.bookmark]: isBookmarkStyle },
        { [styles.active]: isBookmarked }
      )}
      disabled={disabled}>
      {isBookmarkStyle ? bookmarkContent : children}
    </button>
  );
}
