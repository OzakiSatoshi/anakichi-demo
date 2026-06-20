/* @ds-bundle: {"format":3,"namespace":"DesignSystem_2cdba4","components":[{"name":"HatchEvent","sourcePath":"components/notes/HatchEvent.jsx"},{"name":"Note","sourcePath":"components/notes/Note.jsx"},{"name":"CategoryTab","sourcePath":"components/paper/CategoryTab.jsx"},{"name":"Pill","sourcePath":"components/paper/Pill.jsx"},{"name":"RingPanel","sourcePath":"components/paper/RingPanel.jsx"},{"name":"TimeRail","sourcePath":"components/paper/TimeRail.jsx"},{"name":"ZebraList","sourcePath":"components/paper/ZebraList.jsx"}],"sourceHashes":{"components/notes/HatchEvent.jsx":"2ffc055e1683","components/notes/Note.jsx":"e47a980e0ea1","components/paper/CategoryTab.jsx":"20231f444c80","components/paper/Pill.jsx":"17eaf5e098cd","components/paper/RingPanel.jsx":"7eedfb1660da","components/paper/TimeRail.jsx":"ffc286082956","components/paper/ZebraList.jsx":"1594745022d1","ui_kits/techo/DailyPage.jsx":"00afa74ccb78","ui_kits/techo/WishPage.jsx":"75a11ca5bd5b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_2cdba4 = window.DesignSystem_2cdba4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/notes/HatchEvent.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ハッチ枠 / Hatched event — a diagonally-hatched, sepia-outlined box for a
 * confirmed, continuous time block (movie, travel). Reads as "locked in".
 */
function HatchEvent({
  as: Tag = "span",
  children,
  style,
  ...rest
}) {
  const base = {
    display: "inline-block",
    fontFamily: "var(--font-hand)",
    fontSize: "var(--text-sm)",
    color: "var(--ink)",
    border: "1.5px solid var(--ink)",
    borderRadius: "3px",
    padding: "4px 14px",
    background: "repeating-linear-gradient(45deg, transparent 0 5px, rgba(120,88,80,.18) 5px 7px)",
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { HatchEvent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/notes/HatchEvent.jsx", error: String((e && e.message) || e) }); }

// components/notes/Note.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NOTE_COLORS = {
  rose: "var(--rose)",
  // 約束・商談 / appointments
  sky: "var(--sky)",
  // タスク・連絡 / tasks
  leaf: "var(--leaf)",
  // 生活・健康 / life
  peach: "var(--peach)" // 強調・"今" / focus
};

/**
 * フセン / Sticky note — the core primitive of the system.
 * Saturation lives here and nowhere else: color carries meaning (not decoration).
 * Slightly rotated, lifted by a soft shadow, and stands upright on hover.
 */
function Note({
  color = "sky",
  rotate = -0.6,
  lift = true,
  as: Tag = "span",
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const bg = NOTE_COLORS[color] || NOTE_COLORS.sky;
  const base = {
    display: "inline-block",
    fontFamily: "var(--font-hand)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--leading-tight)",
    color: "var(--ink)",
    background: bg,
    borderRadius: "var(--r-note)",
    borderTop: "2px solid rgba(255,255,255,.5)",
    padding: "5px 10px",
    boxShadow: hover && lift ? "var(--shadow-note-raised)" : "var(--shadow-note)",
    transform: hover && lift ? "rotate(0deg) translateY(-2px)" : `rotate(${rotate}deg)`,
    transition: "transform var(--ease-note), box-shadow var(--ease-note)",
    cursor: "default",
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Note });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/notes/Note.jsx", error: String((e && e.message) || e) }); }

// components/paper/CategoryTab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * カテゴリタブ / Category tab — a vertical (writing-mode) classification label
 * placed on the left shoulder of a list group (家族・趣味・美容…).
 */
function CategoryTab({
  as: Tag = "span",
  children,
  style,
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    writingMode: "vertical-rl",
    background: "var(--paper)",
    border: "1px solid var(--rule)",
    borderRadius: "var(--r-sm)",
    padding: "10px 4px",
    fontFamily: "var(--font-hand)",
    fontSize: "var(--text-sm)",
    color: "var(--ink)",
    letterSpacing: "0.1em",
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { CategoryTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/paper/CategoryTab.jsx", error: String((e && e.message) || e) }); }

// components/paper/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ヘッダーピル / Pill header — section heading as a sepia-outlined rounded pill,
 * set in the hand face. Use to title a list or page block.
 */
function Pill({
  as: Tag = "span",
  children,
  style,
  ...rest
}) {
  const base = {
    display: "inline-block",
    background: "var(--paper)",
    border: "1.5px solid var(--ink)",
    borderRadius: "var(--r-pill)",
    padding: "8px 26px",
    fontFamily: "var(--font-hand)",
    fontSize: "var(--text-md)",
    color: "var(--ink-strong)",
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/paper/Pill.jsx", error: String((e && e.message) || e) }); }

// components/paper/RingPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 6穴パネル / Ring-binder panel — the base "sheet" surface. The 6 binder holes
 * down the left margin are the system's signature: every paper face is a
 * swappable module. Use as the container for any planner page or card.
 */
function RingPanel({
  as: Tag = "div",
  children,
  style,
  ...rest
}) {
  const panel = {
    position: "relative",
    background: "var(--surface-paper)",
    border: "1px solid var(--rule)",
    borderRadius: "var(--r-panel)",
    padding: "24px 24px 24px 52px",
    boxShadow: "var(--shadow-paper-inset), var(--shadow-panel)",
    ...style
  };
  // 6 binder holes, evenly spaced down the left margin.
  const holes = {
    content: '""',
    position: "absolute",
    left: "18px",
    top: 0,
    bottom: 0,
    width: "14px",
    backgroundImage: "radial-gradient(circle at center, var(--hole) 0 6px, transparent 7px)",
    backgroundSize: "14px calc(100% / 6)",
    backgroundRepeat: "repeat-y",
    backgroundPosition: "center",
    pointerEvents: "none"
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: panel
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: holes
  }), children);
}
Object.assign(__ds_scope, { RingPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/paper/RingPanel.jsx", error: String((e && e.message) || e) }); }

// components/paper/TimeRail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * タイムレール / Time rail — an hour-by-hour day column. Hairline-ruled rows with
 * alternating pink "hour bands" (--hour-band) to make the time axis scannable,
 * plus optional sky-blue left brackets for fixed commitments (来客 etc).
 *
 * rows: Array<{ hour, band?, bracket?, children? }>
 *   hour     — label shown in the left gutter (e.g. 9, "13")
 *   band     — true to shade the row with the pink hour band
 *   bracket  — string label for a sky-blue commitment bracket on the row
 *   children — node(s) dropped into the slot (usually <Note>s / <HatchEvent>)
 */
function TimeRail({
  rows = [],
  style,
  ...rest
}) {
  const wrap = {
    position: "relative",
    border: "1px solid var(--rule)",
    borderRadius: "8px",
    overflow: "hidden",
    background: "var(--surface-paper)",
    ...style
  };
  const rowBase = (band, first) => ({
    display: "flex",
    alignItems: "stretch",
    minHeight: "34px",
    borderTop: first ? "none" : "1px dashed var(--rule)",
    background: band ? "var(--hour-band)" : "transparent",
    position: "relative"
  });
  const hr = {
    width: "30px",
    flex: "none",
    fontFamily: "var(--font-hand)",
    fontSize: "var(--text-xs)",
    color: "var(--ink-soft)",
    padding: "4px 0 0 8px"
  };
  const slot = {
    flex: 1,
    display: "flex",
    gap: "6px",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "3px 8px 3px 2px"
  };
  const bracket = {
    position: "absolute",
    left: "30px",
    top: "6px",
    bottom: "6px",
    width: "10px",
    borderLeft: "2px solid var(--sky-deep)",
    borderTop: "2px solid var(--sky-deep)",
    borderBottom: "2px solid var(--sky-deep)",
    borderRadius: "4px 0 0 4px"
  };
  const bracketLabel = {
    position: "absolute",
    left: "14px",
    top: "50%",
    transform: "translateY(-50%)",
    fontFamily: "var(--font-hand)",
    fontSize: "var(--text-xs)",
    color: "var(--ink)",
    whiteSpace: "nowrap"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: wrap
  }, rest), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: rowBase(r.band, i === 0)
  }, /*#__PURE__*/React.createElement("span", {
    style: hr
  }, r.hour), /*#__PURE__*/React.createElement("span", {
    style: slot
  }, r.children), r.bracket ? /*#__PURE__*/React.createElement("span", {
    style: bracket
  }, /*#__PURE__*/React.createElement("span", {
    style: bracketLabel
  }, r.bracket)) : null)));
}
Object.assign(__ds_scope, { TimeRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/paper/TimeRail.jsx", error: String((e && e.message) || e) }); }

// components/paper/ZebraList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ゼブラ行 / Zebra list — alternating cream/beige rows for scannable enumeration
 * (WISH lists, item columns). Hand-written face, hairline frame.
 * items: Array<React.ReactNode>
 */
function ZebraList({
  items = [],
  style,
  ...rest
}) {
  const wrap = {
    border: "1px solid var(--rule)",
    borderRadius: "8px",
    overflow: "hidden",
    ...style
  };
  const row = even => ({
    padding: "7px 12px",
    fontFamily: "var(--font-hand)",
    fontSize: "var(--text-sm)",
    color: "var(--ink)",
    background: even ? "var(--zebra)" : "var(--paper)"
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: wrap
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: row(i % 2 === 1)
  }, it)));
}
Object.assign(__ds_scope, { ZebraList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/paper/ZebraList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/techo/DailyPage.jsx
try { (() => {
// DailyPage — a single daily techo spread. Presentational; `rows` drives the rail.
function DailyPage({
  dateLabel = "3 / 13（土）",
  rows = []
}) {
  const {
    RingPanel,
    TimeRail
  } = window.DesignSystem_2cdba4;
  return /*#__PURE__*/React.createElement(RingPanel, {
    style: {
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-hand)",
      fontSize: 22,
      color: "var(--ink-strong)",
      borderBottom: "1.5px solid var(--ink)",
      paddingRight: 28
    }
  }, dateLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: ".15em",
      color: "var(--ink-soft)"
    }
  }, "Daily")), /*#__PURE__*/React.createElement(TimeRail, {
    rows: rows
  }));
}
window.DailyPage = DailyPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/techo/DailyPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/techo/WishPage.jsx
try { (() => {
// WishPage — a WISH-list spread: pill header + category-tabbed zebra lists.
function WishPage({
  groups = []
}) {
  const {
    RingPanel,
    Pill,
    CategoryTab,
    ZebraList
  } = window.DesignSystem_2cdba4;
  return /*#__PURE__*/React.createElement(RingPanel, {
    style: {
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Pill, null, "WISH \u30EA\u30B9\u30C8 \u2460")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, groups.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(CategoryTab, null, g.label), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(ZebraList, {
    items: g.items
  }))))));
}
window.WishPage = WishPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/techo/WishPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.HatchEvent = __ds_scope.HatchEvent;

__ds_ns.Note = __ds_scope.Note;

__ds_ns.CategoryTab = __ds_scope.CategoryTab;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.RingPanel = __ds_scope.RingPanel;

__ds_ns.TimeRail = __ds_scope.TimeRail;

__ds_ns.ZebraList = __ds_scope.ZebraList;

})();
