import React from "react";
import { View } from "react-native";

type Position = "left" | "center" | "right";
type HeaderItemProps = { position?: Position; children?: React.ReactNode };
type HeaderProps = { children?: React.ReactNode };

const HeaderItem: React.FC<HeaderItemProps> = ({ children }) => <>{children}</>;
HeaderItem.displayName = "HeaderItem";

const Header: React.FC<HeaderProps> & { Item: React.FC<HeaderItemProps> } = ({ children }) => {
  const slots: Record<Position, React.ReactNode[]> = { left: [], center: [], right: [] };

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && (child.type as any).displayName === "HeaderItem") {
      const props = child.props as HeaderItemProps;
      const pos = props.position as Position | undefined;
      slots[pos ?? "center"].push(props.children);
    } else {
      slots.center.push(child);
    }
  });

  return (
    <View className="w-full h-16 flex-row items-center px-16">
      <View className="flex-1 items-start justify-center">{slots.left}</View>
      <View className="flex-1 items-center justify-center">{slots.center}</View>
      <View className="flex-1 items-end justify-center">{slots.right}</View>
    </View>
  );
};

Header.Item = HeaderItem;
export default Header;