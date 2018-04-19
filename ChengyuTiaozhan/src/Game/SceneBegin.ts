class SceneBegin extends eui.Component {
    // 单例
    private static shared: SceneBegin;
    public static Shared() {
        if (SceneBegin.shared == null) {
            SceneBegin.shared = new SceneBegin();
        }
        return SceneBegin.shared;
    }

    private btn_begin: eui.Button;
    private btn_setting:eui.Button;
    public constructor() {
        super();
        this.addEventListener(eui.UIEvent.COMPLETE, this.UIcomplete, this);        
        this.skinName = "src/Game/SceneBeginSkin.exml";

    }
    private UIcomplete() {
        this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onclick_begin, this);
        this.btn_setting.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onclick_setting, this);        

    }
    childrenCreated() {
        super.childrenCreated();

    }

    private onclick_begin() {
        this.parent.addChild(SceneLevels.Shared());
        this.parent.removeChild(this);
    }

    private onclick_setting() {
        SoundMenager.Shared().PlayClick();
        this.addChild(GameSetting.Shared());
    }

}
