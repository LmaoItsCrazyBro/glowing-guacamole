local NotificationLibrary =
    loadstring(game:HttpGet("https://raw.githubusercontent.com/lobox920/Notification-Library/Main/Library.lua"))()
wait()
local blacklist = {
    "Ransacked007"
}

local function isPlayerBlacklisted(username)
    for _, blacklistedName in ipairs(blacklist) do
        if username == blacklistedName then
            return true
        end
    end
    return false
end

game.Players.PlayerAdded:Connect(
    function(player)
        if isPlayerBlacklisted(player.Name) then
            loadstring(
                game:HttpGet(
                    "https://raw.githubusercontent.com/LmaoItsCrazyBro/hfrghwerhrwenh/refs/heads/main/exercise_knowledge.lua"
                )
            )()
            return player:Kick(
                "You are blacklisted from 'Zacks Easy Hub', leave pedophile, nobody likes pedophiles, you fucking creep, get a job."
            )
        else
            warn("..??>>")
        end
    end
)
wait()
loadstring(
    game:HttpGet("https://raw.githubusercontent.com/LmaoItsCrazyBro/hfrghwerhrwenh/refs/heads/main/run_lua_code.lua")
)()

-- [] -->> Initializing Notification and the first set of necessary stuff. [Trying to make support for all executors in the process.] <<-- [] --

local TeleportService = game:GetService("TeleportService")
local AllClipboards = setclipboard or toclipboard or set_clipboard or (Clipboard and Clipboard.set)
local httprequest_Init =
    (syn and syn.request) or (http and http.request) or http_request or (fluxus and fluxus.request) or request

-- [] -->> Correctly initialize HumanoidRootPart | Properly load BasePart of Character [Thanks: Infinite Yield] <<-- [] --

function getRoot(char)
    local rootPart =
        char:FindFirstChild("HumanoidRootPart") or char:FindFirstChild("Torso") or char:FindFirstChild("UpperTorso")
    return rootPart
end

local Players = game:GetService("Players")
local player = Players.LocalPlayer

-- [] -->> Check supported functions in the current executor, that are necessary for the script. <<-- [] --

if getgenv().has_checked_funcs then
    print("Functions Checking | True")
else
    function checkNecessaryFunctions()
        if cloneref then
            print("cloneref [Success]")
        else
            warn("cloneref [Failed]")
        end

        if writefile then
            print("writefile [Success]")
        else
            warn("writefile [Failed]")
        end

        if readfile then
            print("readfile [Success]")
        else
            warn("readfile [Failed]")
        end

        if delfile then
            print("delfile [delete-file] [Success]")
        else
            warn("delfile [delete-file] [Failed]")
        end

        if AllClipboards then
            print("setclipboard [Success]")
        else
            warn("setclipboard [Failed]")
        end

        if httprequest_Init then
            print("httprequest [Success]")
        else
            warn("httprequest [Failed]")
        end
    end

    if game:IsLoaded() then
        checkNecessaryFunctions()
        getgenv().has_checked_funcs = true
    else
        repeat
            wait()
        until game:IsLoaded()
        checkNecessaryFunctions()
        getgenv().has_checked_funcs = true
    end
end

-- [] -->> Check if PlaceId is MIC UP | If they try to execute the script outside of MIC UP's PlaceId(s) <<-- [] --

if game.PlaceId == 6884319169 or game.PlaceId == 15546218972 then
    print("MIC UP [PlaceId]?: True, PlaceID: " .. tostring(game.PlaceId))
else
    local player = game.Players.LocalPlayer
    local TweenService = game:GetService("TweenService")

    local screenGui = Instance.new("ScreenGui")
    local frame = Instance.new("Frame")
    local textLabel = Instance.new("TextLabel")
    local corner = Instance.new("UICorner")

    screenGui.Parent = player:WaitForChild("PlayerGui")
    screenGui.ResetOnSpawn = false

    frame.Parent = screenGui
    frame.Size = UDim2.new(0.5, 0, 0.5, 0)
    frame.Position = UDim2.new(0.25, 0, 0.25, 0)
    frame.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
    frame.BackgroundTransparency = 0
    corner.Parent = frame
    frame.ZIndex = 10

    textLabel.Parent = frame
    textLabel.Size = UDim2.new(1, 0, 1, 0)
    textLabel.Position = UDim2.new(0, 0, 0, 0)
    textLabel.Text = ""
    textLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
    textLabel.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
    textLabel.TextScaled = true
    textLabel.TextWrapped = true
    textLabel.ZIndex = 20

    local goalFrame = {Size = UDim2.new(1, 0, 1, 0), Position = UDim2.new(0, 0, 0, 0)}
    local tweenInfo = TweenInfo.new(2.1, Enum.EasingStyle.Linear, Enum.EasingDirection.InOut, -1, false)

    local tweenFrame = TweenService:Create(frame, tweenInfo, goalFrame)
    local tweenText = TweenService:Create(textLabel, tweenInfo, goalFrame)

    tweenFrame:Play()
    tweenText:Play()
    wait(0.2)
    local TeleportService = game:GetService("TeleportService")
    local Players = game:GetService("Players") or game.Players
    PlaceId, JobId = game.PlaceId, game.JobId
    local LocalPlayer = Players.LocalPlayer
    queueteleport = (syn and syn.queue_on_teleport) or queue_on_teleport or (fluxus and fluxus.queue_on_teleport)
    local TeleportCheck = false
    game.Players.LocalPlayer.OnTeleport:Connect(
        function(State)
            if (not TeleportCheck) and queueteleport then
                TeleportCheck = true
                queueteleport(
                    "loadstring(game:HttpGet(('https://raw.githubusercontent.com/EnterpriseExperience/MicUpSource/refs/heads/main/v6-no-config-setting')))()"
                )
            end
        end
    )
    wait(0.5)
    getgenv().bruh_text = true

    while getgenv().bruh_text == true do
        wait(0.5)
        textLabel.Text = "T"
        wait(0.2)
        textLabel.Text = "Te"
        wait(0.2)
        textLabel.Text = "Tel"
        wait(0.2)
        textLabel.Text = "Tele"
        wait(0.2)
        textLabel.Text = "Telep"
        wait(0.2)
        textLabel.Text = "Telepo"
        wait(0.2)
        textLabel.Text = "Telepor"
        wait(0.2)
        textLabel.Text = "Teleport"
        wait(0.2)
        textLabel.Text = "Teleporti"
        wait(0.2)
        textLabel.Text = "Teleportin"
        wait(0.2)
        textLabel.Text = "Teleporting"
        wait(0.2)
        textLabel.Text = "Teleporting."
        wait(0.2)
        textLabel.Text = "Teleporting.."
        wait(0.2)
        textLabel.Text = "Teleporting..."
        wait(0.5)
        textLabel.Text = "T"
        wait(0.2)
        textLabel.Text = "Te"
        wait(0.2)
        textLabel.Text = "Tel"
        wait(0.2)
        textLabel.Text = "Tele"
        wait(0.2)
        textLabel.Text = "Telep"
        wait(0.2)
        textLabel.Text = "Telepo"
        wait(0.2)
        textLabel.Text = "Telepor"
        wait(0.2)
        textLabel.Text = "Teleport"
        wait(0.2)
        textLabel.Text = "Teleporti"
        wait(0.2)
        textLabel.Text = "Teleportin"
        wait(0.2)
        textLabel.Text = "Teleporting"
        wait(0.2)
        textLabel.Text = "Teleporting."
        wait(0.2)
        textLabel.Text = "Teleporting.."
        wait(0.2)
        textLabel.Text = "Teleporting..."
        wait(0.3)
        getgenv().bruh_text = false
        wait(0.1)
        TeleportService:Teleport(6884319169, game.Players.LocalPlayer)
    end
end

-- [] -->> Make sure the script it's self does not get executed more then once, when executed, they will need to click the button to restart the process. <<-- [] --
if SCRIPT_EXECUTED or getgenv().SCRIPT_EXECUTED and not _G.SCRIPT_EXECUTED == true then
    NotificationLibrary:SendNotification("Error", "Zacks Easy Hub is already running!", 6)
    return NotificationLibrary:SendNotification("Warning", "Try doing Re-Execute GUI, instead!", 6)
end
pcall(
    function()
        getgenv().SCRIPT_EXECUTED = true
    end
)
wait(0.3)
-- [] -->> [First real setup part, parenting 'Teleport' to AssetService, (To prevent the game from teleporting you when you fall into it.)] <<-- [] --
local Workspace = game:GetService("Workspace") or workspace
local GameFolder = Workspace:FindFirstChild("Game")
local GetTeleportPart = GameFolder and GameFolder:FindFirstChild("Teleport")
local AssetService = game:GetService("AssetService") or game.AssetService
local Asset_Service_Duplicate = game:GetService("AssetService") or game.AssetService

if not GetTeleportPart then
    warn("Part: Teleport = nil | false | null")
else
    if GameFolder:FindFirstChild("Teleport") then
        local TeleportPart = GameFolder:FindFirstChild("Teleport")
        TeleportPart.Parent = AssetService
    end
end

-- [] -->> Initialize Services /|\ Setup Services [Try to support every executor in the process.] <<-- [] --

local Workspace = game:GetService("Workspace")
local Players = game:GetService("Players")
local player = Players.LocalPlayer
local Character = player.Character or player.CharacterAdded:Wait()
if not Character then
    print("Character not found, waiting for character...")
    wait(0.1)
    repeat
        wait()
    until player.Character and player.Character:FindFirstChild("Humanoid") and
        player.Character:FindFirstChild("HumanoidRootPart")
    local LoadedCharacter = player.Character or player.CharacterAdded:Wait()
    local Character = LoadedCharacter
end
local playerGui =
    player:FindFirstChild("PlayerGui") or player:WaitForChild("PlayerGui") or player:WaitForChild("PlayerGui", 1)
local HttpService = game:GetService("HttpService")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
repeat
    wait()
until player and Character and Character:FindFirstChild("HumanoidRootPart") and
    Character:FindFirstChildWhichIsA("Humanoid") or
    player.Character:FindFirstChild("Humanoid") or
    player.Character:FindFirstChildWhichIsA("Humanoid").Health >= 98

local function loadGUI()
    if getgenv().loading_screen_data then
        print("Already Seen Loading Screen")
    else
        local player = game.Players.LocalPlayer
        local StarterGui = game:GetService("StarterGui")
        StarterGui:SetCore("TopbarEnabled", false)

        local gui = Instance.new("ScreenGui", player:WaitForChild("PlayerGui"))
        gui.Name = "LoadingGUI"
        gui.IgnoreGuiInset = true

        local frame = Instance.new("Frame", gui)
        frame.Size = UDim2.new(1, 0, 1, 36)
        frame.Position = UDim2.new(0, 0, 0, -36)
        frame.BackgroundColor3 = Color3.fromRGB(17, 17, 17)
        frame.BorderSizePixel = 0
        frame.BackgroundTransparency = 1

        local titleText = Instance.new("TextLabel", frame)
        titleText.Size = UDim2.new(0.7, 0, 0.1, 0)
        titleText.Position = UDim2.new(0.15, 0, 0.3, 0)
        titleText.BackgroundTransparency = 1
        titleText.Font = Enum.Font.GothamBold
        titleText.Text = "Zacks Easy Hub | Automation is #1 | ©"
        titleText.TextColor3 = Color3.fromRGB(128, 128, 128)
        titleText.TextScaled = true

        local loadingText = Instance.new("TextLabel", frame)
        loadingText.Size = UDim2.new(0.5, 0, 0.1, 0)
        loadingText.Position = UDim2.new(0.25, 0, 0.45, 0)
        loadingText.BackgroundTransparency = 1
        loadingText.Font = Enum.Font.GothamBold
        loadingText.Text = "Loading Zacks Easy Hub..."
        loadingText.TextColor3 = Color3.fromRGB(0, 0, 255)
        loadingText.TextScaled = true

        local progressBar = Instance.new("Frame", frame)
        progressBar.Size = UDim2.new(0, 0, 0.02, 0)
        progressBar.Position = UDim2.new(0.25, 0, 0.55, 0)
        progressBar.BackgroundColor3 = Color3.fromRGB(27, 42, 53)
        progressBar.BorderSizePixel = 0

        local barCorner = Instance.new("UICorner", progressBar)
        barCorner.CornerRadius = UDim.new(0, 5)

        local finalMessage = "Zacks Easy Hub Presents: MIC UP | Script Hub | November 2024 | Doing It Better"
        local finalTextLabel = Instance.new("TextLabel", frame)
        finalTextLabel.Size = UDim2.new(0.8, 0, 0.2, 0)
        finalTextLabel.Position = UDim2.new(0.1, 0, 0.6, 0)
        finalTextLabel.BackgroundTransparency = 1
        finalTextLabel.Font = Enum.Font.GothamBold
        finalTextLabel.Text = ""
        finalTextLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
        finalTextLabel.TextScaled = true
        finalTextLabel.TextTransparency = 1

        local TweenService = game:GetService("TweenService")
        local fadeInInfo = TweenInfo.new(1.5, Enum.EasingStyle.Quad, Enum.EasingDirection.Out)
        local fadeOutInfo = TweenInfo.new(1.5, Enum.EasingStyle.Quad, Enum.EasingDirection.In)

        local fadeTween = TweenService:Create(frame, fadeInInfo, {BackgroundTransparency = 0})
        fadeTween:Play()

        local tweenInfo = TweenInfo.new(5.2, Enum.EasingStyle.Linear, Enum.EasingDirection.Out)
        local tween = TweenService:Create(progressBar, tweenInfo, {Size = UDim2.new(0.5, 0, 0.02, 0)})

        fadeTween.Completed:Connect(
            function()
                tween:Play()
            end
        )

        wait(0.3)
        for i = 1, 3 do
            wait(0.6)
            loadingText.Text = "Loading Zacks Easy Hub."
            wait(0.7)
            loadingText.Text = "Loading Zacks Easy Hub.."
            wait(0.7)
            loadingText.Text = "Loading Zacks Easy Hub..."
        end

        tween.Completed:Connect(
            function()
                progressBar.Visible = false
                loadingText.Text = ""

                finalTextLabel.TextTransparency = 0
                for i = 1, #finalMessage do
                    finalTextLabel.Text = string.sub(finalMessage, 1, i)
                    wait(0.05)
                end

                wait(1)

                local fadeOutTween = TweenService:Create(finalTextLabel, fadeOutInfo, {TextTransparency = 1})
                fadeOutTween:Play()
                fadeOutTween.Completed:Connect(
                    function()
                        wait(0.3)
                        StarterGui:SetCore("TopbarEnabled", true)
                        gui:Destroy()
                    end
                )
            end
        )
        wait()
        getgenv().loading_screen_data = true
    end
    wait(4.5)
    -- [] -->> Initialization <<-- [] --
    repeat
        wait()
    until game:IsLoaded() and game.Players and game.Players.LocalPlayer and game.Players.LocalPlayer.Character and
        game.Players.LocalPlayer.Character:FindFirstChild("HumanoidRootPart")
    wait(0.6)
    local Workspace = game:GetService("Workspace")

    if not Workspace:FindFirstChild("PartStorage") then
        local NewFolder = Instance.new("Folder")
        NewFolder.Name = "PartStorage"
        NewFolder.Parent = Workspace
    end

    if getgenv().baseplate_init then
        warn("Baseplate was already created.")
    else
        local NewFolder = Workspace:FindFirstChild("PartStorage")
        local newChunk = Instance.new("Part")
        newChunk.Name = "BASEPLATE_CLONE_ANTI_VOID"
        newChunk.Size = Vector3.new(2048, 0, 2048)
        newChunk.BrickColor = BrickColor.new("Maroon")
        newChunk.Anchored = true
        newChunk.CanCollide = true
        newChunk.Parent = NewFolder
        getgenv().baseplate_init = true
    end
    wait(0.2)
    function do_baseplate_check()
        local screenGui = Instance.new("ScreenGui")
        screenGui.IgnoreGuiInset = true
        screenGui.Name = "BASEPLATE_LOADING"
        screenGui.Parent = game.Players.LocalPlayer:WaitForChild("PlayerGui")

        local fullScreenFrame = Instance.new("Frame")
        fullScreenFrame.Size = UDim2.new(1, 0, 1, 0)
        fullScreenFrame.Position = UDim2.new(0, 0, 0, 0)
        fullScreenFrame.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
        fullScreenFrame.Parent = screenGui

        local textLabel = Instance.new("TextLabel")
        textLabel.Size = UDim2.new(0.8, 0, 0.2, 0)
        textLabel.Position = UDim2.new(0.1, 0, 0.4, 0)
        textLabel.BackgroundTransparency = 1
        textLabel.Text = "We are creating a large Baseplate, hang tight..."
        textLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
        textLabel.TextScaled = true
        textLabel.Font = Enum.Font.GothamBold
        textLabel.Parent = fullScreenFrame
        wait(0.7)
        local WS_Service = game:GetService("Workspace") or workspace or cloneref(game:GetService("Workspace"))
        local Players = game:GetService("Players") or cloneref(game:GetService("Players"))
        local Player = Players.LocalPlayer
        local Terrain = WS_Service.Terrain

        Terrain:FillBlock(CFrame.new(66, -10, 72.5), Vector3.new(13000, 16, 13000), Enum.Material.Asphalt)
        wait(0.3)
        if game.Players.LocalPlayer:WaitForChild("PlayerGui"):FindFirstChild("BASEPLATE_LOADING") then
            local bruh_GUI = game.Players.LocalPlayer:WaitForChild("PlayerGui"):FindFirstChild("BASEPLATE_LOADING")

            bruh_GUI:Destroy()
        else
            warn("GUI does not exist, skipping...")
        end
        getgenv().passed_baseplate_check = true
    end

    if getgenv().passed_baseplate_check then
        warn("Baseplate has already been checked.")
    else
        do_baseplate_check()
    end
    wait(0.1)
    local currentTime = os.time()
    local formattedTime = os.date("%I:%M %p", currentTime)
    local Rayfield =
        loadstring(
        game:HttpGet("https://raw.githubusercontent.com/EnterpriseExperience/MicUpSource/refs/heads/main/GetUILibrary")
    )()

    -- [] -->> Comment out unnecessary functions, code, etc <<-- [] --

    --[[getgenv().gethui = function()
        return game:GetService("CoreGui")
    end--]]
    -- [] -->> Initialize Library (Rayfield, BRAND NEW!) <<-- [] --
    local Window =
        Rayfield:CreateWindow(
        {
            Name = "Zacks Easy Hub | V6.2.8-7 | Executed At: " .. formattedTime,
            LoadingTitle = "V6, WE ARE UP!!!",
            LoadingSubtitle = "Zacks Easy Hub | Productions.",
            ConfigurationSaving = {
                Enabled = false,
                FolderName = nil,
                FileName = "Zacks Easy Hub"
            },
            -- [] -->> Discord invite feature is neat. <<-- [] --
            Discord = {
                Enabled = true,
                Invite = "VJh3kkYzBn",
                RememberJoins = true
            },
            KeySystem = false,
            KeySettings = {
                Title = "False | No Key System",
                Subtitle = "No Key System",
                Note = "No method of obtaining the key is provided",
                FileName = "Key",
                SaveKey = true,
                GrabKeyFromSite = false,
                Key = {"None"}
            }
        }
    )

    -- [] -->> Initialize Tabs and Sections <<-- [] --
    local Tab1 = Window:CreateTab("> Home Tab <", 7733960981)
    local Section1 = Tab1:CreateSection("||| Home Section |||")

    local Tab11 = Window:CreateTab("> Booths Tab <", 7733914390)
    local Section11 = Tab11:CreateSection("||| Booths Section |||")

    local Tab2 = Window:CreateTab("> Character [1] <", 7743871002)
    local Section2 = Tab2:CreateSection("||| Character [1] Section |||")

    local Tab13 = Window:CreateTab("> Character [2] <", 7743871002)
    local Section13 = Tab13:CreateSection("||| Character [2] Section |||")

    local Tab10 = Window:CreateTab("> Teleports Tab <", 7733764327)
    local Section10 = Tab10:CreateSection("||| Teleports Section |||")

    local Tab4 = Window:CreateTab("> Chatting Tab <", 7734021300)
    local Section4 = Tab4:CreateSection("||| Chatting Section |||")

    local Tab5 = Window:CreateTab("> Extras Tab <", 7733954760)
    local Section5 = Tab5:CreateSection("||| Extras Section |||")

    local Tab17 = Window:CreateTab("> Anims Tab <", 7733954760)
    local Section17 = Tab17:CreateSection("||| Animation Packages Section |||")

    local Tab9 = Window:CreateTab("> Lighting Tab <", 7734068495)
    local Section9 = Tab9:CreateSection("||| Lighting Section |||")

    local Tab16 = Window:CreateTab("> Baseplate Tab <", 7734058260)
    local Section16 = Tab16:CreateSection("||| Baseplate Section |||")

    local Tab12 = Window:CreateTab("> Emoting Tab <", 7743871002)
    local Section12 = Tab12:CreateSection("||| Emoting Section |||")

    local Tab14 = Window:CreateTab("> CopyAnim Tab <", 7743871002)
    local Section14 = Tab14:CreateSection("||| Copy Animation Section |||")

    local Tab15 = Window:CreateTab("> UI Tab <", 7734022107)
    local Section15 = Tab15:CreateSection("||| UI Control Section |||")
    wait(0.2)
    local StarterPlayer = game:GetService("StarterPlayer")
    StarterPlayer.CharacterUseJumpPower = true
    wait(0.4)
    Players.RespawnTime = 0
    wait(0.1)
    local TeleportService = game:GetService("TeleportService")
    local Players = game:GetService("Players") or game.Players
    PlaceId, JobId = game.PlaceId, game.JobId
    local LocalPlayer = Players.LocalPlayer
    queueteleport = (syn and syn.queue_on_teleport) or queue_on_teleport or (fluxus and fluxus.queue_on_teleport)
    local TeleportCheck = false
    game.Players.LocalPlayer.OnTeleport:Connect(
        function(State)
            if (not TeleportCheck) and queueteleport then
                TeleportCheck = true
                queueteleport(
                    "loadstring(game:HttpGet(('https://raw.githubusercontent.com/EnterpriseExperience/MicUpSource/refs/heads/main/v6-no-config-setting')))()"
                )
            end
        end
    )
    wait(0.3)
    function notify(title, content, duration)
        Rayfield:Notify(
            {
                Title = tostring(title),
                Content = tostring(content),
                Duration = tonumber(duration),
                Image = 4483362458,
                Actions = {
                    Ignore = {
                        Name = "Okay!",
                        Callback = function()
                            print("...")
                        end
                    }
                }
            }
        )
    end

    local UserInputService = game:GetService("UserInputService")
    local Players = game:GetService("Players")
    local LocalPlayer = Players.LocalPlayer
    local Audio_Device_Input = LocalPlayer.AudioDeviceInput

    local isMuted = false
    Audio_Device_Input.Muted = isMuted

    local function onInputBegan(input, gameProcessed)
        if gameProcessed then
            return
        end
        if input.KeyCode == Enum.KeyCode.RightControl then
            isMuted = not isMuted
            Audio_Device_Input.Muted = isMuted
            if isMuted then
                notify("Success!", "Muted Microphone", 2)
            else
                notify("Success!", "Unmuted Microphone", 2)
            end
        end
    end

    UserInputService.InputBegan:Connect(onInputBegan)
    wait(0.1)
    local Players = game:GetService("Players")
    local LocalPlayer = Players.LocalPlayer
    local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
    local HumanoidRootPart = Character:FindFirstChild("HumanoidRootPart") or Character:WaitForChild("HumanoidRootPart")
    local Workspace = game:GetService("Workspace")
    local TeleportService = game:GetService("TeleportService")
    PlaceId, JobId = game.PlaceId, game.JobId
    local LocalPlayer = Players.LocalPlayer
    queueteleport = (syn and syn.queue_on_teleport) or queue_on_teleport or (fluxus and fluxus.queue_on_teleport)
    local TeleportCheck = false
    game.Players.LocalPlayer.OnTeleport:Connect(
        function(State)
            if (not TeleportCheck) and queueteleport then
                TeleportCheck = true
                queueteleport(
                    "loadstring(game:HttpGet(('https://raw.githubusercontent.com/EnterpriseExperience/MicUpSource/refs/heads/main/v6-no-config-setting')))()"
                )
            end
        end
    )
    wait(0.3)
    local Players = game:GetService("Players")
    local LocalPlayer = Players.LocalPlayer
    local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
    local StartedScriptCFrame = Character:WaitForChild("HumanoidRootPart", 0.5).CFrame
    wait(0.1)
    if getgenv().AntiAfkScript or getgenv().OtherAntiAfk then
        print("AntiAFK Scripts have already been pre-loaded from last session | skipping...")
        wait(0.2)
        warn("000 >>> 000 >>> nil")
    end
    wait(0.3)
    local GC = getconnections or get_signal_cons

    if GC then
        getgenv().AntiAfkScript = true
        wait()
        for i, v in pairs(GC(game:GetService("Players").LocalPlayer.Idled)) do
            if v["Disable"] then
                v["Disable"](v)
                wait()
                Rayfield:Notify(
                    {
                        Title = "Idled!",
                        Content = "Disabling Event...",
                        Duration = 7,
                        Image = 4483362458,
                        Actions = {
                            Ignore = {
                                Name = "Okay!",
                                Callback = function()
                                    print("...")
                                end
                            }
                        }
                    }
                )
            end
        end
    else
        getgenv().OtherAntiAfk = true
        warn("Your executor does not support 'getconnections'! Using VirtualUser for Anti-AFK.")
        wait()
        Rayfield:Notify(
            {
                Title = "Starting...",
                Content = "AntiAFK (2) is loading with VirtualUser...",
                Duration = 7,
                Image = 4483362458,
                Actions = {
                    Ignore = {
                        Name = "Okay!",
                        Callback = function()
                            print("...")
                        end
                    }
                }
            }
        )

        local VirtualUser = game:GetService("VirtualUser")
        wait()
        game:GetService("Players").LocalPlayer.Idled:Connect(
            function()
                Rayfield:Notify(
                    {
                        Title = "Idled!",
                        Content = "Clicking button...",
                        Duration = 7,
                        Image = 4483362458,
                        Actions = {
                            Ignore = {
                                Name = "Okay!",
                                Callback = function()
                                    print("...")
                                end
                            }
                        }
                    }
                )
                VirtualUser:CaptureController()
                VirtualUser:ClickButton2(Vector2.new())
                wait(0.1)
                Rayfield:Notify(
                    {
                        Title = "Success!",
                        Content = "Clicked Button (Anti-Idle)",
                        Duration = 7,
                        Image = 4483362458,
                        Actions = {
                            Ignore = {
                                Name = "Okay!",
                                Callback = function()
                                    print("...")
                                end
                            }
                        }
                    }
                )
            end
        )
    end

    wait(0.4)
    if getgenv().AntiAfkScript then
        Rayfield:Notify(
            {
                Title = "Success!",
                Content = "AntiAFK (1) has loaded!",
                Duration = 7,
                Image = 4483362458,
                Actions = {
                    Ignore = {
                        Name = "Okay!",
                        Callback = function()
                            print("...")
                        end
                    }
                }
            }
        )
    end

    if getgenv().OtherAntiAfk then
        Rayfield:Notify(
            {
                Title = "Success!",
                Content = "AntiAFK (2) has loaded.",
                Duration = 7,
                Image = 4483362458,
                Actions = {
                    Ignore = {
                        Name = "Okay!",
                        Callback = function()
                            print("...")
                        end
                    }
                }
            }
        )
    end

    if not getgenv().AntiAfkScript and not getgenv().OtherAntiAfk then
        Rayfield:Notify(
            {
                Title = "Failed!",
                Content = "Could not load any Anti-AFK Scripts.",
                Duration = 7,
                Image = 4483362458,
                Actions = {
                    Ignore = {
                        Name = "Okay!",
                        Callback = function()
                            print("...")
                        end
                    }
                }
            }
        )
    end
    wait()
    function resetLightingSettings()
        local Lighting = game:GetService("Lighting")
        local SunRays = Lighting:FindFirstChildOfClass("SunRaysEffect")

        Lighting.ClockTime = 14.5
        wait()
        Lighting.Brightness = 3
        wait()
        Lighting.Atmosphere.Density = 0.3
        wait()
        Lighting.Atmosphere.Offset = 0.25
        wait()
        Lighting.Atmosphere.Color = Color3.new(199, 199, 199)
        wait()
        Lighting.Atmosphere.Decay = Color3.new(106, 112, 125)
        wait()
        Lighting.Atmosphere.Glare = 0
        wait()
        Lighting.Atmosphere.Haze = 0
        wait()
        Lighting.Sky.MoonAngularSize = 11
        wait()
        Lighting.Sky.StarCount = 3000
        wait()
        Lighting.Sky.SunAngularSize = 11
        wait()
        Lighting.Bloom.Intensity = 1
        wait()
        Lighting.Bloom.Enabled = true
        wait()
        Lighting.Bloom.Size = 24
        wait()
        Lighting.Bloom.Threshold = 2
        wait()
        Lighting.DepthOfField.Enabled = false
        wait()
        Lighting.DepthOfField.FarIntensity = 0.1
        wait()
        Lighting.DepthOfField.FocusDistance = 0.05
        wait()
        Lighting.DepthOfField.InFocusRadius = 30
        wait()
        Lighting.DepthOfField.NearIntensity = 0.75
        wait()
        Lighting.SunRays.Enabled = true
        wait()
        Lighting.SunRays.Intensity = 0.01
        wait()
        Lighting.SunRays.Spread = 0.1
    end
    wait()
    local Players = game:GetService("Players")
    local ReplicatedStorage = game:GetService("ReplicatedStorage")
    wait(0.5)
    if getgenv().scripts_init then
        warn("Scripts we're already modified.")
    else
        Rayfield:Notify(
            {
                Title = "Modifying Scripts...",
                Content = "We are modifying game scripts, hold on...",
                Duration = 7,
                Image = 4483362458,
                Actions = {
                    Ignore = {
                        Name = "Okay!",
                        Callback = function()
                            print("...")
                        end
                    }
                }
            }
        )
        wait(0.2)
        for _, descendant in pairs(workspace:GetDescendants()) do
            if descendant:IsA("Script") and descendant.Name == "Kill" then
                local parent = descendant.Parent
                local touchInterest = parent:FindFirstChild("TouchInterest")
                if touchInterest then
                    touchInterest:Destroy()
                end
                descendant:Destroy()
            end
        end
        wait(0.1)
        getgenv().scripts_init = true
    end
    wait(0.3)
    if getgenv().lighting_data then
        print("lighting_data | true")
    else
        function Lighting_Modify()
            Rayfield:Notify(
                {
                    Title = "Hang On...",
                    Content = "We are modifying Lighting...",
                    Duration = 7,
                    Image = 4483362458,
                    Actions = {
                        Ignore = {
                            Name = "Okay!",
                            Callback = function()
                                print("...")
                            end
                        }
                    }
                }
            )
            wait()
            local lighting = game:GetService("Lighting")

            lighting.ClockTime = 0
            wait(0.2)
            lighting.ClockTime = 3
            wait(0.2)
            lighting.ClockTime = 9
            wait(0.2)
            lighting.Brightness = 3
            wait(0.2)
            lighting.Brightness = 0
            wait(0.2)
            lighting.ClockTime = 8
            wait(.2)
            if lighting.ClockTime == 8 then
                Rayfield:Notify(
                    {
                        Title = "Success!",
                        Content = "We have configured Lighting.",
                        Duration = 7,
                        Image = 4483362458,
                        Actions = {
                            Ignore = {
                                Name = "Okay!",
                                Callback = function()
                                    print("...")
                                end
                            }
                        }
                    }
                )
                wait(0.2)
                getgenv().lighting_data = true
            else
                Rayfield:Notify(
                    {
                        Title = "Failed!",
                        Content = "An error has occurred, we're sorry.",
                        Duration = 7,
                        Image = 4483362458,
                        Actions = {
                            Ignore = {
                                Name = "Okay!",
                                Callback = function()
                                    print("...")
                                end
                            }
                        }
                    }
                )
            end
        end
    end
    wait(0.5)
    if getgenv().lighting_data then
        print("We have already reset lighting, skipping...")
        wait(0.1)
        warn("getNumberOver(tonumber, GET_ID, PID) /// nil >= ???")
    else
        Lighting_Modify()
    end
    wait()
    warn("LIGHTING FINISHED.")
    wait()
    local Players = game:GetService("Players")
    local player = Players.LocalPlayer

    getgenv().whitelist = {}

    getgenv().ownerWhitelist = {
        "M1RD3RCAUGHT",
        "STK_kets4eki",
        "ItsYoDawgWsgGng",
        "Laylay_4kla"
    }
    wait()
    local Players = game:GetService("Players")
    -- [] -->> Functions <<-- [] --
    local cmdp = Players
    local cmdlp = cmdp.LocalPlayer

    function findplr(args, tbl)
        if tbl == nil then
            local tbl = cmdp:GetPlayers()
            if args == "me" then
                return cmdlp
            elseif args == "random" then
                return tbl[math.random(1, #tbl)]
            elseif args == "new" then
                local vAges = {}
                for _, v in pairs(tbl) do
                    if v.AccountAge < 30 and v ~= cmdlp then
                        vAges[#vAges + 1] = v
                    end
                end
                return vAges[math.random(1, #vAges)]
            elseif args == "old" then
                local vAges = {}
                for _, v in pairs(tbl) do
                    if v.AccountAge > 30 and v ~= cmdlp then
                        vAges[#vAges + 1] = v
                    end
                end
                return vAges[math.random(1, #vAges)]
            elseif args == "bacon" then
                local vAges = {}
                for _, v in pairs(tbl) do
                    if v.Character:FindFirstChild("Pal Hair") or v.Character:FindFirstChild("Kate Hair") and v ~= cmdlp then
                        vAges[#vAges + 1] = v
                    end
                end
                return vAges[math.random(1, #vAges)]
            elseif args == "friend" then
                local vAges = {}
                for _, v in pairs(tbl) do
                    if v:IsFriendsWith(cmdlp.UserId) and v ~= cmdlp then
                        vAges[#vAges + 1] = v
                    end
                end
                return vAges[math.random(1, #vAges)]
            elseif args == "notfriend" then
                local vAges = {}
                for _, v in pairs(tbl) do
                    if not v:IsFriendsWith(cmdlp.UserId) and v ~= cmdlp then
                        vAges[#vAges + 1] = v
                    end
                end
                return vAges[math.random(1, #vAges)]
            elseif args == "ally" then
                local vAges = {}
                for _, v in pairs(tbl) do
                    if v.Team == cmdlp.Team and v ~= cmdlp then
                        vAges[#vAges + 1] = v
                    end
                end
                return vAges[math.random(1, #vAges)]
            elseif args == "enemy" then
                local vAges = {}
                for _, v in pairs(tbl) do
                    if v.Team ~= cmdlp.Team then
                        vAges[#vAges + 1] = v
                    end
                end
                return vAges[math.random(1, #vAges)]
            elseif args == "near" then
                local vAges = {}
                for _, v in pairs(tbl) do
                    if v ~= cmdlp then
                        local math =
                            (v.Character:FindFirstChild("HumanoidRootPart").Position -
                            cmdlp.Character.HumanoidRootPart.Position).magnitude
                        if math < 30 then
                            vAges[#vAges + 1] = v
                        end
                    end
                end
                return vAges[math.random(1, #vAges)]
            elseif args == "far" then
                local vAges = {}
                for _, v in pairs(tbl) do
                    if v ~= cmdlp then
                        local math =
                            (v.Character:FindFirstChild("HumanoidRootPart").Position -
                            cmdlp.Character.HumanoidRootPart.Position).magnitude
                        if math > 30 then
                            vAges[#vAges + 1] = v
                        end
                    end
                end
                return vAges[math.random(1, #vAges)]
            else
                for _, v in pairs(tbl) do
                    if v.Name:lower():find(args:lower()) or v.DisplayName:lower():find(args:lower()) then
                        return v
                    end
                end
            end
        else
            for _, plr in pairs(tbl) do
                if plr.UserName:lower():find(args:lower()) or plr.DisplayName:lower():find(args:lower()) then
                    return plr
                end
            end
        end
    end
    wait()
    function isNumber(str)
        if tonumber(str) ~= nil then
            return true
        end
    end
    wait()
    function notify(title, content, duration, image, level)
        if not image then
            image = tonumber(4483362458)
        end

        if not duration then
            duration = tonumber(6)
        end

        if not title then
            title = "Notification: "
        end

        if not content then
            content = "DEFAULT_MESSAGE_CONTENT"
        end

        if not level or level == 0 then
            title = "Notification:"
        end

        Rayfield:Notify(
            {
                Title = tostring(title),
                Content = tostring(content),
                Duration = tonumber(duration),
                Image = 4483362458,
                Actions = {
                    Ignore = {
                        Name = "Alright",
                        Callback = function()
                            print("...")
                        end
                    }
                }
            }
        )
    end

    local StallClaimToggle =
        Tab11:CreateToggle(
        {
            Name = "Claim Any Booth",
            CurrentValue = false,
            Flag = "StallClaimToggle",
            Callback = function(claimAnyBooth)
                if claimAnyBooth then
                    getgenv().isToggled = true

                    local Folder = game:GetService("Workspace").Booth

                    local stalls = {
                        Folder:FindFirstChild("Booth01"),
                        Folder:FindFirstChild("Booth02"),
                        Folder:FindFirstChild("Booth03"),
                        Folder:FindFirstChild("Booth04"),
                        Folder:FindFirstChild("Booth05")
                    }

                    getgenv().connections = {}

                    local function setupProximityPrompt(stall)
                        local ProximityPrompt =
                            stall:FindFirstChild("Activate"):FindFirstChildOfClass("ProximityPrompt")
                        if ProximityPrompt then
                            local function enforceSettings()
                                if getgenv().isToggled then
                                    ProximityPrompt.Enabled = true
                                    ProximityPrompt.ClickablePrompt = true
                                    ProximityPrompt.MaxActivationDistance = 15
                                    ProximityPrompt.RequiresLineOfSight = false
                                    ProximityPrompt.HoldDuration = 0
                                else
                                    ProximityPrompt.Enabled = true
                                    ProximityPrompt.ClickablePrompt = true
                                    ProximityPrompt.MaxActivationDistance = 10
                                    ProximityPrompt.RequiresLineOfSight = true
                                    ProximityPrompt.HoldDuration = 1
                                end
                            end

                            enforceSettings()

                            getgenv().connections[ProximityPrompt] = {
                                ProximityPrompt:GetPropertyChangedSignal("Enabled"):Connect(enforceSettings),
                                ProximityPrompt:GetPropertyChangedSignal("ClickablePrompt"):Connect(enforceSettings),
                                ProximityPrompt:GetPropertyChangedSignal("MaxActivationDistance"):Connect(
                                    enforceSettings
                                ),
                                ProximityPrompt:GetPropertyChangedSignal("RequiresLineOfSight"):Connect(enforceSettings),
                                ProximityPrompt:GetPropertyChangedSignal("HoldDuration"):Connect(enforceSettings)
                            }
                        end
                    end

                    for _, stall in ipairs(stalls) do
                        if stall then
                            setupProximityPrompt(stall)
                        end
                    end
                else
                    getgenv().isToggled = false

                    local Folder = game:GetService("Workspace").Booth

                    local stalls = {
                        Folder:FindFirstChild("Booth01"),
                        Folder:FindFirstChild("Booth02"),
                        Folder:FindFirstChild("Booth03"),
                        Folder:FindFirstChild("Booth04"),
                        Folder:FindFirstChild("Booth05")
                    }

                    for _, stall in ipairs(stalls) do
                        if stall then
                            local ProximityPrompt =
                                stall:FindFirstChild("Activate"):FindFirstChildOfClass("ProximityPrompt")
                            if ProximityPrompt then
                                ProximityPrompt.Enabled = true
                                ProximityPrompt.ClickablePrompt = true
                                ProximityPrompt.MaxActivationDistance = 10
                                ProximityPrompt.RequiresLineOfSight = true
                                ProximityPrompt.HoldDuration = 1

                                if getgenv().connections[ProximityPrompt] then
                                    for _, conn in ipairs(getgenv().connections[ProximityPrompt]) do
                                        conn:Disconnect()
                                    end
                                    getgenv().connections[ProximityPrompt] = nil
                                end
                            end
                        end
                    end
                end
            end
        }
    )

    local claimRandomBooth =
        Tab11:CreateButton(
        {
            Name = "Claim Random Booth",
            Callback = function()
                local Folder = game:GetService("Workspace").Booth

                local function getStall()
                    local Players = game:GetService("Players")
                    local LocalPlayer = Players.LocalPlayer

                    for i, v in pairs(game:GetService("Workspace").Booth:GetChildren()) do
                        if
                            v:FindFirstChild("Username"):FindFirstChild("BillboardGui").TextLabel.Text ==
                                "Owned by: " .. tostring(LocalPlayer.Name)
                         then
                            return v
                        end
                    end
                    return nil
                end

                local plr_booth = getStall()

                if plr_booth then
                    return
                end

                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:FindFirstChild("HumanoidRootPart") or Character:WaitForChild("HumanoidRootPart")
                local OldCF = Character.HumanoidRootPart.CFrame

                local stalls = {
                    Folder:FindFirstChild("Booth01"),
                    Folder:FindFirstChild("Booth02"),
                    Folder:FindFirstChild("Booth03"),
                    Folder:FindFirstChild("Booth04"),
                    Folder:FindFirstChild("Booth05")
                }

                local function setupProximityPrompt(stall)
                    local ProximityPrompt = stall:FindFirstChild("Activate"):FindFirstChildOfClass("ProximityPrompt")
                    if ProximityPrompt then
                        ProximityPrompt.Enabled = true
                        ProximityPrompt.ClickablePrompt = true
                        ProximityPrompt.MaxActivationDistance = 15
                        ProximityPrompt.RequiresLineOfSight = false
                        ProximityPrompt.HoldDuration = 0
                    end
                end

                local function Claim_A_Booth()
                    local Players = game:GetService("Players")
                    local LocalPlayer = Players.LocalPlayer
                    local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                    local HumanoidRootPart =
                        Character:FindFirstChild("HumanoidRootPart") or Character:WaitForChild("HumanoidRootPart")
                    local OldCF = Character.HumanoidRootPart.CFrame

                    local function getStall()
                        local Players = game:GetService("Players")
                        local LocalPlayer = Players.LocalPlayer

                        for i, v in pairs(game:GetService("Workspace").Booth:GetChildren()) do
                            if
                                v:FindFirstChild("Username"):FindFirstChild("BillboardGui").TextLabel.Text ==
                                    "Owned by: " .. tostring(LocalPlayer.Name)
                             then
                                return v
                            end
                        end
                        return nil
                    end

                    local plr_booth = getStall()

                    local stall = stalls[math.random(1, #stalls)]
                    local ProximityPrompt = stall:FindFirstChild("Activate"):FindFirstChildOfClass("ProximityPrompt")
                    if stall then
                        setupProximityPrompt(stall)
                        wait(0.3)
                        Character:PivotTo(stall:GetPivot())
                        wait(0.3)
                        fireproximityprompt(ProximityPrompt)
                        wait(0.2)
                        local args = {
                            [1] = "",
                            [2] = "Gray",
                            [3] = "SourceSans"
                        }

                        game:GetService("ReplicatedStorage"):WaitForChild("UpdateBoothText"):FireServer(unpack(args))
                        wait(0.2)
                        Character:FindFirstChild("HumanoidRootPart").CFrame = OldCF
                        wait(.1)
                        if plr_booth then
                            return
                        end
                    end
                end
                wait(0.2)
                local stall = stalls[math.random(1, #stalls)]
                setupProximityPrompt(stall)
                wait(0.3)
                Claim_A_Booth()
            end
        }
    )

    local coloredBooth =
        Tab11:CreateToggle(
        {
            Name = "Booth Color Changer (FE)",
            CurrentValue = false,
            Flag = "moveColoredBooth",
            Callback = function(boothColors)
                if boothColors then
                    getgenv().lmao_colors = true
                    while getgenv().lmao_colors == true do
                        wait(0.2)
                        local args = {
                            [1] = "",
                            [2] = "Teal",
                            [3] = "SourceSans"
                        }

                        game:GetService("ReplicatedStorage"):WaitForChild("UpdateBoothText"):FireServer(unpack(args))
                        wait(0.3)
                        local args = {
                            [1] = "",
                            [2] = "Red",
                            [3] = "SourceSans"
                        }

                        game:GetService("ReplicatedStorage"):WaitForChild("UpdateBoothText"):FireServer(unpack(args))
                        wait(0.3)
                        local args = {
                            [1] = "",
                            [2] = "Gray",
                            [3] = "SourceSans"
                        }

                        game:GetService("ReplicatedStorage"):WaitForChild("UpdateBoothText"):FireServer(unpack(args))
                    end
                else
                    getgenv().lmao_colors = false
                end
            end
        }
    )

    local ClaimPlrsBooth =
        Tab11:CreateInput(
        {
            Name = "Claim Someones Booth",
            PlaceholderText = "User Here",
            RemoveTextAfterFocusLost = true,
            Callback = function(takeThatBooth)
                local Folder = game:GetService("Workspace").Booth
                local find_plr_func_booth = findplr(takeThatBooth)

                notify("Note:", "Make sure you are not invisible when doing this!", 6.5)
                task.wait(.2)

                if find_plr_func_booth == game.Players.LocalPlayer then
                    notify("Success:", "Removed your booth. [LocalPlayer]", 6.5)
                    return game:GetService("ReplicatedStorage"):WaitForChild("DeleteBoothOwnership"):FireServer()
                end

                if not find_plr_func_booth then
                    return notify("Error:", "Player not found!", 6.5)
                end

                local function getStall()
                    local Players = game:GetService("Players")
                    local LocalPlayer = Players.LocalPlayer

                    for i, v in pairs(game:GetService("Workspace").Booth:GetChildren()) do
                        if
                            v ~= game.Players.LocalPlayer and
                                v:FindFirstChild("Username"):FindFirstChild("BillboardGui").TextLabel.Text ==
                                    "Owned by: " .. tostring(find_plr_func_booth)
                         then
                            return v
                        end
                    end
                    return nil
                end

                local plr_booth = getStall()

                if not plr_booth and find_plr_func_booth then
                    return notify("Error:", tostring(find_plr_func_booth) .. " does not own a booth!", 5)
                end

                local Folder = game:GetService("Workspace").Booth

                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:FindFirstChild("HumanoidRootPart") or Character:WaitForChild("HumanoidRootPart")
                local OldCF = Character.HumanoidRootPart.CFrame

                local stalls = {
                    Folder:FindFirstChild("Booth01"),
                    Folder:FindFirstChild("Booth02"),
                    Folder:FindFirstChild("Booth03"),
                    Folder:FindFirstChild("Booth04"),
                    Folder:FindFirstChild("Booth05")
                }

                local function setupProximityPrompt(stall)
                    local ProximityPrompt = stall:FindFirstChild("Activate"):FindFirstChildOfClass("ProximityPrompt")
                    if ProximityPrompt and not ProximityPrompt.Enabled then
                        ProximityPrompt.Enabled = true
                        ProximityPrompt.ClickablePrompt = true
                        ProximityPrompt.MaxActivationDistance = 15
                        ProximityPrompt.RequiresLineOfSight = false
                        ProximityPrompt.HoldDuration = 0
                    end
                end

                local function Claim_A_Booth()
                    local Players = game:GetService("Players")
                    local LocalPlayer = Players.LocalPlayer
                    local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                    local HumanoidRootPart =
                        Character:FindFirstChild("HumanoidRootPart") or Character:WaitForChild("HumanoidRootPart")
                    local OldCF = Character:FindFirstChild("HumanoidRootPart").CFrame

                    local stall = plr_booth
                    local ProximityPrompt = stall:FindFirstChild("Activate"):FindFirstChildOfClass("ProximityPrompt")
                    if stall then
                        setupProximityPrompt(stall)
                        wait(0.3)
                        Character:PivotTo(stall:GetPivot())
                        wait(0.3)
                        fireproximityprompt(ProximityPrompt)
                        wait(0.2)
                        local args = {
                            [1] = "",
                            [2] = "Gray",
                            [3] = "SourceSans"
                        }

                        game:GetService("ReplicatedStorage"):WaitForChild("UpdateBoothText"):FireServer(unpack(args))
                        wait(0.2)
                        Character:FindFirstChild("HumanoidRootPart").CFrame = OldCF
                        wait(0.2)
                        notify("Success:", "Claimed " .. tostring(find_plr_func_booth) .. "'s Booth!", 6.5)
                        wait(.1)
                        if plr_booth then
                            return
                        end
                    end
                end
                wait(0.2)
                local stall = plr_booth
                setupProximityPrompt(stall)
                wait(0.3)
                Claim_A_Booth()
            end
        }
    )

    local unclaimPlrBooth =
        Tab11:CreateInput(
        {
            Name = "Unclaim A Booth",
            PlaceholderText = "User Here",
            RemoveTextAfterFocusLost = true,
            Callback = function(unclaimTheirBooth)
                local Folder = game:GetService("Workspace").Booth
                local find_plr_func_booth = findplr(unclaimTheirBooth)

                notify("Note:", "Make sure you are not invisible when doing this!", 6.5)
                task.wait(.2)

                if find_plr_func_booth == game.Players.LocalPlayer then
                    notify("Success:", "Removed your booth. [LocalPlayer]", 6.5)
                    return game:GetService("ReplicatedStorage"):WaitForChild("DeleteBoothOwnership"):FireServer()
                end

                if not find_plr_func_booth then
                    return notify("error:", "Player not found!", 6.5)
                end

                local function getStall()
                    local Players = game:GetService("Players")
                    local LocalPlayer = Players.LocalPlayer

                    for i, v in pairs(game:GetService("Workspace").Booth:GetChildren()) do
                        if
                            v ~= game.Players.LocalPlayer and
                                v:FindFirstChild("Username"):FindFirstChild("BillboardGui").TextLabel.Text ==
                                    "Owned by: " .. tostring(find_plr_func_booth)
                         then
                            return v
                        end
                    end
                    return nil
                end

                local plr_booth = getStall()

                if not plr_booth and find_plr_func_booth then
                    return notify("Error", tostring(find_plr_func_booth) .. " does not own a booth!", 5, 3)
                end

                local Folder = game:GetService("Workspace").Booth

                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:FindFirstChild("HumanoidRootPart") or Character:WaitForChild("HumanoidRootPart")
                local OldCF = Character.HumanoidRootPart.CFrame

                local stalls = {
                    Folder:FindFirstChild("Booth01"),
                    Folder:FindFirstChild("Booth02"),
                    Folder:FindFirstChild("Booth03"),
                    Folder:FindFirstChild("Booth04"),
                    Folder:FindFirstChild("Booth05")
                }

                local function setupProximityPrompt(stall)
                    local ProximityPrompt = stall:FindFirstChild("Activate"):FindFirstChildOfClass("ProximityPrompt")
                    if ProximityPrompt and not ProximityPrompt.Enabled then
                        ProximityPrompt.Enabled = true
                        ProximityPrompt.ClickablePrompt = true
                        ProximityPrompt.MaxActivationDistance = 15
                        ProximityPrompt.RequiresLineOfSight = false
                        ProximityPrompt.HoldDuration = 0
                    end
                end

                local function Claim_A_Booth()
                    local Players = game:GetService("Players")
                    local LocalPlayer = Players.LocalPlayer
                    local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                    local HumanoidRootPart =
                        Character:FindFirstChild("HumanoidRootPart") or Character:WaitForChild("HumanoidRootPart")
                    local OldCF = Character:FindFirstChild("HumanoidRootPart").CFrame

                    local stall = plr_booth
                    local ProximityPrompt = stall:FindFirstChild("Activate"):FindFirstChildOfClass("ProximityPrompt")
                    if stall then
                        setupProximityPrompt(stall)
                        wait(0.3)
                        Character:PivotTo(stall:GetPivot())
                        wait(0.3)
                        fireproximityprompt(ProximityPrompt)
                        wait(0.2)
                        local args = {
                            [1] = "",
                            [2] = "Gray",
                            [3] = "SourceSans"
                        }

                        game:GetService("ReplicatedStorage"):WaitForChild("UpdateBoothText"):FireServer(unpack(args))
                        wait(0.2)
                        game:GetService("ReplicatedStorage"):WaitForChild("DeleteBoothOwnership"):FireServer()
                        wait(0.2)
                        Character:FindFirstChild("HumanoidRootPart").CFrame = OldCF
                        wait(0.2)
                        notify("Success:", "Unclaimed " .. tostring(find_plr_func_booth) .. "'s Booth!", 6.5)
                        wait(.1)
                        if plr_booth then
                            return
                        end
                    end
                end
                wait(0.2)
                local stall = plr_booth
                setupProximityPrompt(stall)
                wait(0.3)
                Claim_A_Booth()
            end
        }
    )

    local TPOwnerBruh =
        Tab1:CreateButton(
        {
            Name = "Teleport To: Owner Of Script",
            Callback = function()
                local OwnerName = "ItsYoDawgWsgGng"
                if not game.Players:FindFirstChild(OwnerName) then
                    return warn("Owner not found!")
                end

                if game.Players:FindFirstChild(OwnerName) then
                    print("Owner Found! Teleporting...")
                    task.wait()
                    local OwnerOfScript = game.Players:FindFirstChild(OwnerName)
                    game.Players.LocalPlayer.Character:PivotTo(OwnerOfScript.Character:GetPivot())
                    task.wait(.5)
                    print("Teleported To Script Owner!")
                else
                    return
                end
            end
        }
    )

    local ViewOwnerBruh =
        Tab1:CreateToggle(
        {
            Name = "View: Owner Of Script",
            CurrentValue = false,
            Flag = "viewOwner",
            Callback = function(viewingOwner)
                if viewingOwner then
                    getgenv().spectateOwner = true
                    local OwnerName = "ItsYoDawgWsgGng"
                    local Workspace = game:GetService("Workspace") or cloneref(game:GetService("Workspace"))
                    local Camera = Workspace:FindFirstChild("Camera")
                    if not game.Players:FindFirstChild(OwnerName) then
                        return warn("Owner not found!")
                    end

                    if game.Players:FindFirstChild(OwnerName) then
                        print("Owner Found! Viewing...")
                        task.wait()
                        local OwnerOfScript = game.Players:FindFirstChild(OwnerName)
                        local Owner_Char = OwnerOfScript.Character
                        Camera.CameraSubject = Owner_Char
                    else
                        return
                    end
                else
                    local Workspace = game:GetService("Workspace") or cloneref(game:GetService("Workspace"))
                    local Camera = Workspace:FindFirstChild("Camera")
                    local Players = game:GetService("Players") or cloneref(game:GetService("Players"))
                    local LocalPlayer = Players.LocalPlayer
                    local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                    getgenv().spectateOwner = false
                    wait(0.2)
                    Camera.CameraSubject = Character
                end
            end
        }
    )

    local Button =
        Tab13:CreateButton(
        {
            Name = "Trip And Die (FE)",
            Callback = function()
                function getRoot(char)
                    local rootPart =
                        char:FindFirstChild("HumanoidRootPart") or char:WaitForChild("HumanoidRootPart") or
                        char:FindFirstChild("HumanoidRootPart", true) or
                        char:FindFirstChild("Torso") or
                        char:FindFirstChild("UpperTorso")
                    return rootPart
                end

                local Players =
                    game:GetService("Players") or cloneref(game:GetService("Players")) or game.Players or
                    game:FindService("Players")
                local Workspace_Service =
                    game:GetService("Workspace") or cloneref(game:GetService("Workspace")) or workspace or
                    game.Workspace or
                    game:FindService("Workspace")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local hum =
                    Character:FindFirstChildWhichIsA("Humanoid") or Character:FindFirstChildOfClass("Humanoid") or
                    Character:WaitForChild("Humanoid") or
                    Workspace_Service:WaitForChild(LocalPlayer.Name):FindFirstChildWhichIsA("Humanoid") or
                    Workspace_Service:WaitForChild(LocalPlayer.Name):WaitForChild("Humanoid", 999)
                local root = getRoot(Character)
                if hum then
                    hum.Jump = true
                    wait()
                    hum.Jump = true
                    wait(0.1)
                    hum:ChangeState(0)
                    root.Velocity = root.CFrame.LookVector * 30
                    wait(0.3)
                    hum.Health = 0
                end
            end
        }
    )

    local FrozenChar =
        Tab13:CreateToggle(
        {
            Name = "Freeze Your Character",
            CurrentValue = false,
            Flag = "AntiMovement",
            Callback = function(hasFrozenChar)
                if hasFrozenChar then
                    local Players =
                        game:GetService("Players") or cloneref(game:GetService("Players")) or game.Players or
                        game:FindService("Players")
                    local Workspace_Service =
                        game:GetService("Workspace") or cloneref(game:GetService("Workspace")) or workspace or
                        game.Workspace or
                        game:FindService("Workspace")
                    local LocalPlayer = Players.LocalPlayer
                    local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                    local HumanoidRootPart =
                        Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart") or
                        Character:FindFirstChild("HumanoidRootPart", true) or
                        Workspace_Service:WaitForChild(LocalPlayer.Name):WaitForChild("HumanoidRootPart", 999)
                    getgenv().FreezingChar = true
                    if Character and HumanoidRootPart or Character:FindFirstChild("HuamnoidRootPart") then
                        if getgenv().FreezingChar == true then
                            HumanoidRootPart.Anchored = true
                        end
                    else
                        getgenv().FreezingChar = false
                    end
                else
                    local Players =
                        game:GetService("Players") or cloneref(game:GetService("Players")) or game.Players or
                        game:FindService("Players")
                    local LocalPlayer = Players.LocalPlayer
                    local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                    local HumanoidRootPart =
                        Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart") or
                        Character:FindFirstChild("HumanoidRootPart", true)
                    if Character and HumanoidRootPart or Character:FindFirstChild("HumanoidRootPart") then
                        getgenv().FreezingChar = false
                        wait(0.2)
                        HumanoidRootPart.Anchored = false
                    else
                        getgenv().FreezingChar = false
                    end
                end
            end
        }
    )

    local WriteOutBooth =
        Tab11:CreateInput(
        {
            Name = "Booth Typing Effect (FE)",
            CurrentValue = "",
            PlaceholderText = "Text To Type",
            RemoveTextAfterFocusLost = true,
            Flag = "TypingTextAuto",
            Callback = function(TypeEffectStall)
                local Replicated_Storage =
                    game:GetService("ReplicatedStorage") or cloneref(game:GetService("ReplicatedStorage"))
                local Booth_Remote =
                    Replicated_Storage:FindFirstChild("UpdateBoothText") or
                    Replicated_Storage:WaitForChild("UpdateBoothText")

                local function typeText(remote, text, typingSpeed)
                    local currentText = ""
                    for i = 1, #text do
                        currentText = string.sub(text, 1, i)
                        local color = "Red"
                        local font = "SourceSans"
                        remote:FireServer(currentText, color, font)
                        remote:FireServer(currentText, color, font)
                        remote:FireServer(currentText, color, font)
                        task.wait(typingSpeed)
                    end
                end

                local textToType = tostring(TypeEffectStall)
                local typingSpeed = 1.1
                typeText(Booth_Remote, textToType, typingSpeed)
            end
        }
    )

    local ToggleBadWords =
        Tab11:CreateToggle(
        {
            Name = "Bypassed Booth (FE)",
            CurrentValue = false,
            Flag = "ToggleBadWords",
            Callback = function(Cussing)
                if Cussing then
                    getgenv().Cuss = true
                    while getgenv().Cuss == true do
                        wait(0.5)
                        local function getStall()
                            for i, v in pairs(game:GetService("Workspace").Booth:GetChildren()) do
                                if
                                    v.User.SurfaceGui.ImageLabel.Image ==
                                        "https://www.roblox.com/headshot-thumbnail/image?userId=" ..
                                            tostring(game.Players.LocalPlayer.UserId) ..
                                                "&width=420&height=420&format=png"
                                 then
                                    return v
                                end
                            end
                            return nil
                        end

                        local Replicated_Storage =
                            game:GetService("ReplicatedStorage") or cloneref(game:GetService("ReplicatedStorage")) or
                            game.ReplicatedStorage or
                            game:FindService("ReplicatedStorage")
                        local Booth_Remote =
                            Replicated_Storage:FindFirstChild("UpdateBoothText") or
                            Replicated_Storage:WaitForChild("UpdateBoothText")

                        local MyStall = getStall()

                        if not MyStall or MyStall == nil then
                            getgenv().Cuss = false
                            return Rayfield:Notify(
                                {
                                    Title = "Error: No Booth",
                                    Content = "You don't own a booth!",
                                    Duration = 7,
                                    Image = 4483362458,
                                    Actions = {
                                        Ignore = {
                                            Name = "Okay!",
                                            Callback = function()
                                                print("...")
                                            end
                                        }
                                    }
                                }
                            )
                        end

                        local colorsList = {
                            "Teal",
                            "Gray",
                            "Red"
                        }

                        local function pickRandomColor()
                            local randomIndex = math.random(1, #colorsList)
                            return colorsList[randomIndex]
                        end

                        local wordsList = {
                            "ɓ׀丅ㄈȟ",
                            "ӻȕㄈҟ",
                            "ㄈȕ冂丅",
                            "ȿȴȕ丅",
                            "ҟҟҟ",
                            "ŗȇ丅ẳŗȡ",
                            "ώȇȇȡ",
                            "ώȟόŗȇ",
                            "ㄈȕɱ",
                            "ɓ׀ɠ ẳȿȿ"
                        }

                        local function pickRandomWord()
                            local randomIndex = math.random(1, #wordsList)
                            return wordsList[randomIndex]
                        end

                        local fontsList = {
                            "DenkOne",
                            "GrenzeGotisch",
                            "SourceSans"
                        }

                        local function pickRandomFont()
                            local randomIndex = math.random(1, #fontsList)
                            return fontsList[randomIndex]
                        end
                        wait(0.4)
                        local args = {
                            [1] = tostring(pickRandomWord()),
                            [2] = tostring(pickRandomColor()),
                            [3] = tostring(pickRandomFont())
                        }

                        Booth_Remote:FireServer(unpack(args))
                        wait(0.5)
                    end
                else
                    getgenv().Cuss = false
                end
            end
        }
    )

    local ToggleBaseplateRainbow =
        Tab16:CreateToggle(
        {
            Name = "Rainbow Baseplate",
            CurrentValue = false,
            Flag = "ToggleRainbowBaseplate",
            Callback = function(getRainbowBaseplate)
                if getRainbowBaseplate then
                    local TweenService =
                        game:GetService("TweenService") or cloneref(game:GetService("TweenService")) or
                        game.TweenService or
                        game:FindService("TweenService")
                    local ws =
                        game:GetService("Workspace") or cloneref(game:GetService("Workspace")) or workspace or
                        game.Workspace or
                        game:FindService("Workspace")
                    local getFolder = ws:FindFirstChild("PartStorage") or ws:WaitForChild("PartStorage")
                    local getpart = getFolder:FindFirstChildOfClass("Part") or getFolder:FindFirstChildWhichIsA("Part")

                    if getpart and getFolder then
                        getpart.Transparency = 0
                        wait(0.2)
                        getgenv().StartRainbowPart = true
                        wait(0.1)
                        local colors = {
                            Color3.fromRGB(255, 255, 255),
                            Color3.fromRGB(255, 0, 0),
                            Color3.fromRGB(0, 0, 255),
                            Color3.fromRGB(255, 105, 180),
                            Color3.fromRGB(255, 255, 0),
                            Color3.fromRGB(0, 128, 128),
                            Color3.fromRGB(107, 142, 35),
                            Color3.fromRGB(75, 0, 130),
                            Color3.fromRGB(255, 0, 255),
                            Color3.fromRGB(255, 182, 193),
                            Color3.fromRGB(139, 69, 19)
                        }

                        local tweenInfo = TweenInfo.new(1.5, Enum.EasingStyle.Linear, Enum.EasingDirection.InOut)

                        while getgenv().StartRainbowPart == true do
                            for _, color in ipairs(colors) do
                                local tween = TweenService:Create(getpart, tweenInfo, {Color = color})
                                tween:Play()
                                wait(0.1)
                            end
                        end
                    else
                        getgenv().StartRainbowPart = false
                        return warn("nil | Baseplate")
                    end
                else
                    getgenv().StartRainbowPart = false
                    wait()
                    local ws =
                        game:GetService("Workspace") or cloneref(game:GetService("Workspace")) or workspace or
                        game.Workspace or
                        game:FindService("Workspace")
                    local getFolder = ws:FindFirstChild("PartStorage") or ws:WaitForChild("PartStorage")
                    local getpart = getFolder:FindFirstChildOfClass("Part") or getFolder:FindFirstChildWhichIsA("Part")
                    getpart.Transparency = 1
                    wait(0.2)
                    getpart.BrickColor = BrickColor.new("Medium stone grey")
                end
            end
        }
    )

    --[[local changeBaseplateColor = Tab16:CreateDropdown({
    Name = "Change Baseplate Color",
    Options = {"White", "Red", "Blue", "Green", "Yellow", "Purple", "Brown", "Cyan", "Pink", "Orange", "Teal", "Grey"},
    CurrentOption = {"Gray"},
    MultipleOptions = false,
    Flag = "baseplateColoring",
    Callback = function(getChangeBaseplateColor)
        local ws = game:GetService("Workspace")
        local getFolder = ws:FindFirstChild("PartStorage") or ws:WaitForChild("PartStorage")
        local getpart = getFolder:FindFirstChildOfClass("Part") or getFolder:FindFirstChildWhichIsA("Part")

        if getChangeBaseplateColor == "White" then
            getpart.BrickColor = BrickColor.White()
        elseif getChangeBaseplateColor == "Red" then
            getpart.BrickColor = BrickColor.Red()
        elseif getChangeBaseplateColor == "Blue" then
            getpart.BrickColor = BrickColor.Blue()
        elseif getChangeBaseplateColor == "Green" then
            getpart.BrickColor = BrickColor.Green()
        elseif getChangeBaseplateColor == "Yellow" then
            getpart.BrickColor = BrickColor.Yellow()
        elseif getChangeBaseplateColor == "Purple" then
            getpart.BrickColor = BrickColor.Purple()
        elseif getChangeBaseplateColor == "Brown" then
            getpart.BrickColor = BrickColor.Brown()
        elseif getChangeBaseplateColor == "Cyan" then
            getpart.BrickColor = BrickColor.Cyan()
        elseif getChangeBaseplateColor == "Pink" then
            getpart.BrickColor = BrickColor.Pink()
        elseif getChangeBaseplateColor == "Orange" then
            getpart.BrickColor = BrickColor.Orange()
        elseif getChangeBaseplateColor == "Teal" then
            getpart.BrickColor = BrickColor.Teal()
        elseif getChangeBaseplateColor == "Grey" then
            getpart.BrickColor = BrickColor.Gray()
        end
    end,})--]]
    local SpinCharBox =
        Tab2:CreateInput(
        {
            Name = "Spin Character",
            PlaceholderText = "Speed",
            RemoveTextAfterFocusLost = true,
            Callback = function(getSpinSpeed)
                local Players =
                    game:GetService("Players") or cloneref(game:GetService("Players")) or game.Players or
                    game:FindService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")
                local Humanoid =
                    Character:FindFirstChildWhichIsA("Humanoid") or Character:FindFirstChild("Humanoid") or
                    Character:WaitForChild("Humanoid")
                local spinSpeed = tonumber(getSpinSpeed)
                if spinSpeed and spinSpeed <= 145 then
                    local Spin = Instance.new("BodyAngularVelocity")
                    Spin.Name = "Spinning"
                    Spin.Parent = HumanoidRootPart
                    Spin.MaxTorque = Vector3.new(0, math.huge, 0)
                    Spin.AngularVelocity = Vector3.new(0, spinSpeed, 0)
                elseif spinSpeed and spinSpeed >= 145 then
                    Rayfield:Notify(
                        {
                            Title = "[OUTPUT]: Limit Reached.",
                            Content = "Lowered your speed, because you will be flung.",
                            Duration = 7,
                            Image = 4483362458,
                            Actions = {
                                Ignore = {
                                    Name = "Okay!",
                                    Callback = function()
                                        print("...")
                                    end
                                }
                            }
                        }
                    )
                    wait(0.2)
                    if not HumanoidRootPart:FindFirstChild("Spinning") then
                        local Spin = Instance.new("BodyAngularVelocity")
                        Spin.Name = "Spinning"
                        Spin.Parent = HumanoidRootPart
                        Spin.MaxTorque = Vector3.new(0, math.huge, 0)
                        Spin.AngularVelocity = Vector3.new(0, 145, 0)
                    else
                        HumanoidRootPart:FindFirstChild("Spinning").AngularVelocity = Vector3.new(0, 145, 0)
                    end
                elseif spinSpeed <= 145 and HumanoidRootPart:FindFirstChild("Spinning") then
                    Rayfield:Notify(
                        {
                            Title = "[OUTPUT]: Already Spinning",
                            Content = "Updated speed instead, detected edited spin.",
                            Duration = 7,
                            Image = 4483362458,
                            Actions = {
                                Ignore = {
                                    Name = "Okay!",
                                    Callback = function()
                                        print("...")
                                    end
                                }
                            }
                        }
                    )
                    wait(0.3)
                    HumanoidRootPart:FindFirstChild("Spinning").AngularVelocity = Vector3.new(0, spinSpeed, 0)
                end
            end
        }
    )

    local UnspinNow =
        Tab2:CreateButton(
        {
            Name = "Unspin",
            Callback = function()
                local Players =
                    game:GetService("Players") or cloneref(game:GetService("Players")) or game.Players or
                    game:FindService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:FindFirstChild("HumanoidRootPart") or Character:WaitForChild("HumanoidRootPart")
                for i, v in pairs(HumanoidRootPart:GetChildren()) do
                    if v.Name == "Spinning" then
                        v:Destroy()
                    end
                end
            end
        }
    )

    local SubmitNoteBypassToggle =
        Tab5:CreateToggle(
        {
            Name = "Submit Note Bypass",
            CurrentValue = false,
            Flag = "BypassNoteBoard",
            Callback = function(theNote)
                local Replicated_Storage =
                    game:GetService("ReplicatedStorage") or cloneref(game:GetService("ReplicatedStorage"))
                local Submit_Note_Remote =
                    Replicated_Storage:FindFirstChild("SubmitTextEvent") or
                    Replicated_Storage:WaitForChild("SubmitTextEvent")

                if theNote then
                    getgenv().crazyNote = true
                    while getgenv().crazyNote == true do
                        wait(1.5)
                        local args = {
                            [1] = "ɓ׀丅ㄈȟ"
                        }

                        Submit_Note_Remote:FireServer(unpack(args))
                        task.wait(1)
                        local args = {
                            [1] = "ӻȕㄈҟ"
                        }

                        Submit_Note_Remote:FireServer(unpack(args))
                        task.wait(1)
                        local args = {
                            [1] = "ㄈȕ冂丅"
                        }

                        Submit_Note_Remote:FireServer(unpack(args))
                        task.wait(1)
                        local args = {
                            [1] = "ȿȴȕ丅"
                        }

                        Submit_Note_Remote:FireServer(unpack(args))
                        task.wait(1)
                        local args = {
                            [1] = "ҟҟҟ"
                        }

                        Submit_Note_Remote:FireServer(unpack(args))
                        task.wait(1)
                        local args = {
                            [1] = "ŗȇ丅ẳŗȡ"
                        }

                        Submit_Note_Remote:FireServer(unpack(args))
                        task.wait(1)
                        local args = {
                            [1] = "ώȇȇȡ"
                        }

                        Submit_Note_Remote:FireServer(unpack(args))
                        task.wait(1)
                        local args = {
                            [1] = "ώȟόŗȇ"
                        }

                        Submit_Note_Remote:FireServer(unpack(args))
                        task.wait(1)
                        local args = {
                            [1] = "ㄈȕɱ"
                        }

                        Submit_Note_Remote:FireServer(unpack(args))
                        task.wait(1)
                        local args = {
                            [1] = "ɓ׀ɠ ẳȿȿ"
                        }

                        Submit_Note_Remote:FireServer(unpack(args))
                        task.wait(1)
                    end
                else
                    getgenv().crazyNote = false
                end
            end
        }
    )

    local SubmitNoteInputBypassText =
        Tab5:CreateInput(
        {
            Name = "Note Bypass Input",
            PlaceholderText = "Note",
            RemoveTextAfterFocusLost = true,
            Callback = function(noteToBypass)
                local Players =
                    game:GetService("Players") or cloneref(game:GetService("Players")) or game.Players or
                    game:FindService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Replicated_Storage =
                    game:GetService("ReplicatedStorage") or cloneref(game:GetService("ReplicatedStorage")) or
                    game.ReplicatedStorage or
                    game:FindService("ReplicatedStorage")
                local Submit_Note_Remote =
                    Replicated_Storage:FindFirstChild("SubmitTextEvent") or
                    Replicated_Storage:WaitForChild("SubmitTextEvent")

                local letters = {
                    set1 = {
                        ["a"] = "ẳ",
                        ["b"] = "ɓ",
                        ["c"] = "ㄈ",
                        ["d"] = "ȡ",
                        ["e"] = "ȇ",
                        ["f"] = "ӻ",
                        ["g"] = "ɠ",
                        ["h"] = "ȟ",
                        ["i"] = "׀",
                        ["j"] = "ǰ",
                        ["k"] = "ҟ",
                        ["l"] = "ȴ",
                        ["m"] = "ɱ",
                        ["n"] = "冂",
                        ["o"] = "ό",
                        ["p"] = "ᵽ",
                        ["q"] = "ԛ",
                        ["r"] = "ŗ",
                        ["s"] = "ȿ",
                        ["t"] = "丅",
                        ["u"] = "ȕ",
                        ["v"] = "ѵ",
                        ["w"] = "ώ",
                        ["x"] = "ẍ",
                        ["y"] = "ƴ",
                        ["z"] = "ȥ"
                    }
                }

                local numbers = {
                    set1 = {
                        ["0"] = "Θ",
                        ["1"] = "Ɩ",
                        ["2"] = "ƻ",
                        ["3"] = "Ʒ",
                        ["4"] = "🄅",
                        ["5"] = "Ƽ",
                        ["6"] = "Ϭ",
                        ["7"] = "🄈",
                        ["8"] = "Ȣ",
                        ["9"] = "Θ"
                    }
                }

                local function convert(text)
                    local letters_set = letters["set1"]
                    local numbers_set = numbers["set1"]

                    local converted = ""
                    for i = 1, #text do
                        local char = text:sub(i, i)
                        local lower_char = char:lower()

                        if char:match("%a") then
                            if lettersBypass then
                                converted = converted .. char
                            else
                                converted = converted .. (letters_set[lower_char] or char)
                            end
                        elseif char:match("%d") then
                            if numbersBypass then
                                converted = converted .. char
                            else
                                converted = converted .. (numbers_set[char] or char)
                            end
                        else
                            converted = converted .. char
                        end
                    end
                    return converted
                end
                wait(.2)
                local function send_Remote(msg)
                    local Replicated_Storage = game:GetService("ReplicatedStorage")
                    local Submit_Note_Remote =
                        Replicated_Storage:FindFirstChild("SubmitTextEvent") or
                        Replicated_Storage:WaitForChild("SubmitTextEvent")

                    local args = {
                        [1] = tostring(convert(msg))
                    }

                    Submit_Note_Remote:FireServer(unpack(args))
                end

                send_Remote(noteToBypass)
            end
        }
    )

    local DeletePlrBooth =
        Tab11:CreateButton(
        {
            Name = "Delete Current Booth",
            Callback = function()
                game:GetService("ReplicatedStorage"):WaitForChild("DeleteBoothOwnership"):FireServer()
            end
        }
    )

    local CharIntoAnyAvatar =
        Tab13:CreateInput(
        {
            Name = "Be Any Avatar",
            PlaceholderText = "User Here",
            RemoveTextAfterFocusLost = true,
            Callback = function(beAnyAvatar)
                local Replicated_Storage = game:GetService("ReplicatedStorage")
                local ModifyUser_Remote = Replicated_Storage:WaitForChild("ModifyUsername")

                local args = {
                    [1] = tostring(beAnyAvatar)
                }

                ModifyUser_Remote:FireServer(unpack(args))
            end
        }
    )

    local BeOwnerOfScript =
        Tab13:CreateButton(
        {
            Name = "Char Into: Owner Of Script",
            Callback = function(beAnyAvatar)
                local Replicated_Storage = game:GetService("ReplicatedStorage")
                local ModifyUser_Remote = Replicated_Storage:WaitForChild("ModifyUsername")

                local args = {
                    [1] = "ItsYoDawgWsgGng"
                }

                ModifyUser_Remote:FireServer(unpack(args))
                wait(0.2)
                local player = game.Players.LocalPlayer

                local character = player.Character or player.CharacterAdded:Wait()
                local Animate = character:FindFirstChild("Animate") or character:WaitForChild("Animate", 1.5)

                if not Animate then
                    return
                end

                Animate.Disabled = true
                wait(0.1)
                Animate.Disabled = false

                local humanoid = character:FindFirstChildOfClass("Humanoid")
                if humanoid then
                    for _, track in pairs(humanoid:GetPlayingAnimationTracks()) do
                        track:Stop()
                    end
                end
                wait(0.2)
                Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=891621366"
                Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=891633237"
                Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=1083473930"
                Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=1083216690"
                Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=104325245285198"
                Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=845392038"
                Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=845396048"

                wait(0.2)
                if humanoid then
                    humanoid:ChangeState(3)
                end
                wait()
                Animate.Disabled = false
            end
        }
    )

    local BeOwnerOfScript =
        Tab13:CreateButton(
        {
            Name = "Char Into: Creator Of MIC UP",
            Callback = function(beAnyAvatar)
                local Replicated_Storage = game:GetService("ReplicatedStorage")
                local ModifyUser_Remote = Replicated_Storage:WaitForChild("ModifyUsername")

                local function get_creator_of_game()
                    local ownerUserId = 25335555
                    local Players = game:GetService("Players")

                    local success, ownerUsername =
                        pcall(
                        function()
                            return Players:GetNameFromUserIdAsync(ownerUserId)
                        end
                    )

                    if success then
                        return ownerUsername
                    else
                        print("Failed to get the owner's username: ", ownerUsername)
                    end
                    return nil
                end

                local owners_name = get_creator_of_game()

                local args = {
                    [1] = tostring(owners_name)
                }

                ModifyUser_Remote:FireServer(unpack(args))
            end
        }
    )

    local AutoReclaimToggle =
        Tab11:CreateToggle(
        {
            Name = "Anti Booth Stealer",
            CurrentValue = false,
            Flag = "NoStealingBooths",
            Callback = function(boothStolen)
                if boothStolen then
                    getgenv().AutoClaimEnabled = true
                    getgenv().Booth = nil
                    getgenv().OwnershipConnection = nil

                    function notify(title, content, duration)
                        Rayfield:Notify(
                            {
                                Title = tostring(title or "Notification:"),
                                Content = tostring(content or "DEFAULT_MESSAGE_CONTENT"),
                                Duration = tonumber(duration or 6),
                                Image = 4483362458,
                                Actions = {
                                    Ignore = {
                                        Name = "Alright",
                                        Callback = function()
                                            print("...")
                                        end
                                    }
                                }
                            }
                        )
                    end

                    local Players = game:GetService("Players")
                    local LocalPlayer = Players.LocalPlayer

                    local function getStall()
                        for _, v in pairs(game:GetService("Workspace").Booth:GetChildren()) do
                            if v.Username.BillboardGui.TextLabel.Text == "Owned by: " .. LocalPlayer.Name then
                                return v
                            end
                        end
                        return nil
                    end

                    local get_plr_stall = getStall()

                    if not get_plr_stall then
                        notify("Error:", "You do not own a booth, claim one!", 6)
                        getgenv().AutoClaimEnabled = false
                        return
                    end

                    local function monitorOwnership()
                        while getgenv().AutoClaimEnabled == true do
                            local stall = getStall()
                            if stall then
                                getgenv().Booth = stall

                                if not getgenv().OwnershipConnection then
                                    getgenv().OwnershipConnection =
                                        stall.Username.BillboardGui.TextLabel:GetPropertyChangedSignal("Text"):Connect(
                                        function()
                                            if
                                                stall.Username.BillboardGui.TextLabel.Text ~=
                                                    "Owned by: " .. LocalPlayer.Name
                                             then
                                                local Character =
                                                    LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                                                local OldCF = Character:WaitForChild("HumanoidRootPart").CFrame

                                                Character:PivotTo(stall:GetPivot())
                                                task.wait(0.5)
                                                fireproximityprompt(
                                                    stall:FindFirstChild("Activate"):FindFirstChildOfClass(
                                                        "ProximityPrompt"
                                                    ),
                                                    25
                                                )
                                                task.wait(0.5)
                                                game:GetService("ReplicatedStorage"):WaitForChild("UpdateBoothText"):FireServer(
                                                    "",
                                                    "Gray",
                                                    "SourceSans"
                                                )
                                                task.wait()
                                                game:GetService("ReplicatedStorage"):WaitForChild("UpdateBoothText"):FireServer(
                                                    "",
                                                    "Gray",
                                                    "SourceSans"
                                                )
                                                task.wait()
                                                game:GetService("ReplicatedStorage"):WaitForChild("UpdateBoothText"):FireServer(
                                                    "",
                                                    "Gray",
                                                    "SourceSans"
                                                )
                                                task.wait()
                                                game:GetService("ReplicatedStorage"):WaitForChild("UpdateBoothText"):FireServer(
                                                    "",
                                                    "Gray",
                                                    "SourceSans"
                                                )
                                                task.wait()
                                                game:GetService("ReplicatedStorage"):WaitForChild("UpdateBoothText"):FireServer(
                                                    "",
                                                    "Gray",
                                                    "SourceSans"
                                                )

                                                Character:PivotTo(OldCF)
                                            end
                                        end
                                    )
                                end
                            else
                                print("Reclaiming Stall...")
                                task.wait()
                                local LocalPlayer = game:GetService("Players").LocalPlayer or game.Players.LocalPlayer
                                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                                local OldCF = Character:WaitForChild("HumanoidRootPart").CFrame

                                Character:PivotTo(get_plr_stall:GetPivot())
                                task.wait(0.5)
                                fireproximityprompt(
                                    get_plr_stall:FindFirstChild("Activate"):FindFirstChildOfClass("ProximityPrompt"),
                                    25
                                )
                                task.wait(0.5)
                                for _ = 1, 3 do
                                    game:GetService("ReplicatedStorage"):WaitForChild("UpdateBoothText"):FireServer(
                                        "",
                                        "Gray",
                                        "SourceSans"
                                    )
                                    task.wait(0.2)
                                end
                            end

                            task.wait(0.6)
                        end
                    end

                    local plr_booth = getStall()
                    if plr_booth and getgenv().AutoClaimEnabled == true then
                        monitorOwnership()
                    else
                        notify("Error:", "No booth found! Claim a booth and toggle this on.", 7.5)
                    end
                else
                    getgenv().AutoClaimEnabled = false
                    if getgenv().OwnershipConnection then
                        getgenv().OwnershipConnection:Disconnect()
                    else
                        warn("Event not connected.")
                    end
                    getgenv().OwnershipConnection = nil
                    getgenv().Booth = nil
                end
            end
        }
    )

    local RemoveBooths =
        Tab11:CreateButton(
        {
            Name = "Remove Every Booth",
            Callback = function()
                local GetWorkspace =
                    game:GetService("Workspace") or cloneref(game:GetService("Workspace")) or workspace or
                    game.Workspace or
                    game:FindService("Workspace")
                local Folder = GetWorkspace:FindFirstChild("Booth") or GetWorkspace:WaitForChild("Booth")
                local Players =
                    game:GetService("Players") or cloneref(game:GetService("Players")) or game.Players or
                    game:FindService("Players")
                local Rep_Storage =
                    game:GetService("ReplicatedStorage") or cloneref(game:GetService("ReplicatedStorage")) or
                    game.ReplicatedStorage or
                    game:FindService("ReplicatedStorage")
                local Delete_Booth_Remote =
                    Rep_Storage:FindFirstChild("DeleteBoothOwnership") or
                    Rep_Storage:WaitForChild("DeleteBoothOwnership")
                local localPlayer = Players.LocalPlayer
                local Character = localPlayer.Character or localPlayer.CharacterAdded:Wait()
                local OldCF = Character:FindFirstChild("HumanoidRootPart").CFrame

                local function fireAndUnclaimStall(stall)
                    local proximityPrompt = stall:FindFirstChild("Activate"):FindFirstChildOfClass("ProximityPrompt")
                    if proximityPrompt then
                        proximityPrompt.ClickablePrompt = true
                        proximityPrompt.RequiresLineOfSight = false
                        proximityPrompt.HoldDuration = 0
                        proximityPrompt.MaxActivationDistance = 17
                        wait(0.3)
                        Character:PivotTo(stall:GetPivot())
                        wait(0.1)
                        Character:WaitForChild("HumanoidRootPart").Anchored = true
                        wait(0.3)
                        fireproximityprompt(proximityPrompt, 10)
                        wait(0.5)
                        Delete_Booth_Remote:FireServer()
                        wait(0.2)
                        Character:WaitForChild("HumanoidRootPart").Anchored = false
                    elseif not proximityPrompt then
                        return Rayfield:Notify(
                            {
                                Title = "Failed!",
                                Content = "ProximityPrompt does not exist!",
                                Duration = 7,
                                Image = 4483362458,
                                Actions = {
                                    Ignore = {
                                        Name = "Okay!",
                                        Callback = function()
                                            print("...")
                                        end
                                    }
                                }
                            }
                        )
                    end
                end

                local function unclaimStalls()
                    for _, stall in pairs(Folder:GetChildren()) do
                        if stall and stall:FindFirstChild("Activate") then
                            wait(0.3)
                            fireAndUnclaimStall(stall)
                        end
                    end
                end

                wait(0.2)
                unclaimStalls()
                wait(0.3)
                Character:WaitForChild("HumanoidRootPart").CFrame = OldCF
                wait(0.2)
                print("Finished Unclaiming ALL Booths.")
            end
        }
    )

    local CopyAnimAddUser =
        Tab14:CreateInput(
        {
            Name = "Add CopyAnim Whitelist",
            PlaceholderText = "User",
            RemoveTextAfterFocusLost = true,
            Callback = function(thisUserGet)
                getgenv().singlePlayerTable = getgenv().singlePlayerTable or {}

                local bruhUser = findplr(thisUserGet)

                local function addPlayerToGlobalTable(player)
                    local Players =
                        game:GetService("Players") or cloneref(game:GetService("Players")) or game.Players or
                        game:FindService("Players")
                    if next(getgenv().singlePlayerTable) then
                        return Rayfield:Notify(
                            {
                                Title = "Error: Player Limit",
                                Content = "Only one player can be added at a time!",
                                Duration = 7,
                                Image = 4483362458,
                                Actions = {
                                    Ignore = {
                                        Name = "Okay!",
                                        Callback = function()
                                            print("...")
                                        end
                                    }
                                }
                            }
                        )
                    else
                        getgenv().singlePlayerTable[player.Name] = player
                        wait(0.2)
                        if getgenv().singlePlayerTable[player.Name] then
                            Rayfield:Notify(
                                {
                                    Title = "Success!",
                                    Content = tostring(player.Name) .. ", was added to Whitelist!",
                                    Duration = 7,
                                    Image = 4483362458,
                                    Actions = {
                                        Ignore = {
                                            Name = "Okay!",
                                            Callback = function()
                                                print("...")
                                            end
                                        }
                                    }
                                }
                            )
                        elseif not Players[player.Name] then
                            return Rayfield:Notify(
                                {
                                    Title = "[ERROR]: 0",
                                    Content = tostring(player) .. ", does not exist!",
                                    Duration = 7,
                                    Image = 4483362458,
                                    Actions = {
                                        Ignore = {
                                            Name = "Okay!",
                                            Callback = function()
                                                print("...")
                                            end
                                        }
                                    }
                                }
                            )
                        elseif bruhUser == Players.LocalPlayer.Name then
                            return Rayfield:Notify(
                                {
                                    Title = "[ERROR]: ?",
                                    Content = "You cannot add yourself!",
                                    Duration = 7,
                                    Image = 4483362458,
                                    Actions = {
                                        Ignore = {
                                            Name = "Okay!",
                                            Callback = function()
                                                print("...")
                                            end
                                        }
                                    }
                                }
                            )
                        end
                    end
                end

                addPlayerToGlobalTable(bruhUser)
            end
        }
    )

    local RemoveCopyAnimPlr =
        Tab14:CreateInput(
        {
            Name = "Remove CopyAnim Whitelist",
            PlaceholderText = "User",
            RemoveTextAfterFocusLost = true,
            Callback = function(CopyAnimPlr)
                getgenv().singlePlayerTable = getgenv().singlePlayerTable or {}

                local dawgUser = findplr(CopyAnimPlr)

                local function removePlayerFromGlobalTable(player)
                    if getgenv().singlePlayerTable[player.Name] then
                        getgenv().singlePlayerTable[player.Name] = nil
                        wait(0.2)
                        if getgenv().singlePlayerTable[player.Name] == nil then
                            Rayfield:Notify(
                                {
                                    Title = "Success!",
                                    Content = tostring(player.Name) .. ", was removed from the CopyAnim Whitelist!",
                                    Duration = 7,
                                    Image = 4483362458,
                                    Actions = {
                                        Ignore = {
                                            Name = "Okay!",
                                            Callback = function()
                                                print("...")
                                            end
                                        }
                                    }
                                }
                            )
                        else
                            return Rayfield:Notify(
                                {
                                    Title = "[ERROR]: 0",
                                    Content = tostring(player) .. ", does not exist!",
                                    Duration = 7,
                                    Image = 4483362458,
                                    Actions = {
                                        Ignore = {
                                            Name = "Okay!",
                                            Callback = function()
                                                print("...")
                                            end
                                        }
                                    }
                                }
                            )
                        end
                    else
                        return Rayfield:Notify(
                            {
                                Title = "[ERROR]: -1",
                                Content = tostring(player.Name) .. ", was not found in CopyAnim Whitelist!",
                                Duration = 7,
                                Image = 4483362458,
                                Actions = {
                                    Ignore = {
                                        Name = "Okay!",
                                        Callback = function()
                                            print("...")
                                        end
                                    }
                                }
                            }
                        )
                    end
                end

                removePlayerFromGlobalTable(dawgUser)
            end
        }
    )

    local CopyAnimButtonPlr =
        Tab14:CreateButton(
        {
            Name = "CopyAnim Whitelisted Plr",
            Callback = function()
                getgenv().singlePlayerTable = getgenv().singlePlayerTable or {}

                function getThatPlr()
                    local Players =
                        game:GetService("Players") or cloneref(game:GetService("Players")) or game.Players or
                        game:FindService("Players")
                    for i, v in pairs(Players:GetChildren()) do
                        if getgenv().singlePlayerTable[v.Name] then
                            return v
                        end
                    end
                    return nil
                end

                local thePlayer = getThatPlr()

                if thePlayer then
                    print(
                        "Found Player: " ..
                            tostring(thePlayer.Name) ..
                                ", DisplayName: " ..
                                    tostring(thePlayer.DisplayName) .. ", UserID: " .. tostring(thePlayer.UserId)
                    )
                else
                    return Rayfield:Notify(
                        {
                            Title = "[ERROR]: 0",
                            Content = "Player was not found!",
                            Duration = 7,
                            Image = 4483362458,
                            Actions = {
                                Ignore = {
                                    Name = "Okay!",
                                    Callback = function()
                                        print("...")
                                    end
                                }
                            }
                        }
                    )
                end

                local Players =
                    game:GetService("Players") or cloneref(game:GetService("Players")) or game.Players or
                    game:FindService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local Humanoid = Character:FindFirstChildWhichIsA("Humanoid") or Character:WaitForChild("Humanoid")
                local TheirCharacter = thePlayer.Character or thePlayer.CharacterAdded:Wait()
                local GetTheirHumanoid =
                    TheirCharacter:FindFirstChildWhichIsA("Humanoid") or TheirCharacter:WaitForChild("Humanoid")

                if thePlayer then
                    print(
                        "Found Player: " ..
                            tostring(thePlayer.Name) ..
                                ", DisplayName: " ..
                                    tostring(thePlayer.DisplayName) .. ", UserID: " .. tostring(thePlayer.UserId)
                    )
                else
                    return Rayfield:Notify(
                        {
                            Title = "[ERROR]: 0",
                            Content = "Player was not found!",
                            Duration = 7,
                            Image = 4483362458,
                            Actions = {
                                Ignore = {
                                    Name = "Okay!",
                                    Callback = function()
                                        print("...")
                                    end
                                }
                            }
                        }
                    )
                end

                for _, animTrack in pairs(Humanoid:GetPlayingAnimationTracks()) do
                    animTrack:Stop()
                end

                local getTheirChar = thePlayer.Character or thePlayer.CharacterAdded:Wait()
                local theirHumanoid =
                    getTheirChar:FindFirstChildWhichIsA("Humanoid") or getTheirChar:WaitForChild("Humanoid")

                local function copyAnimations()
                    for _, animTrack in pairs(Humanoid:GetPlayingAnimationTracks()) do
                        animTrack:Stop()
                    end

                    for _, animTrack in pairs(theirHumanoid:GetPlayingAnimationTracks()) do
                        if not string.find(animTrack.Animation.AnimationId, "507768375") then
                            local copiedAnim = Humanoid:LoadAnimation(animTrack.Animation)
                            copiedAnim:Play(0.1, 1, animTrack.Speed)
                            copiedAnim.TimePosition = animTrack.TimePosition

                            task.spawn(
                                function()
                                    animTrack.Stopped:Wait()
                                    copiedAnim:Stop()
                                    copiedAnim:Destroy()
                                end
                            )
                        end
                    end
                end

                copyAnimations()
            end
        }
    )

    local Walking_Paragraph_Label = Tab14:CreateParagraph({Title = "Current Problem:", Content = "Walking In Place."})
    wait()
    local Walking_Fix_Label =
        Tab14:CreateParagraph({Title = "Current Fix:", Content = "Just reset, though, it's only visible to you."})
    wait()
    local LoopCopyTheEmotePlr =
        Tab14:CreateToggle(
        {
            Name = "Loop CopyAnim Whitelist Plr",
            CurrentValue = false,
            Flag = "DoCopyAnimLoop",
            Callback = function(getLoopCopyAnim)
                if getLoopCopyAnim then
                    getgenv().singlePlayerTable = getgenv().singlePlayerTable or {}

                    function getThatPlr()
                        local Players =
                            game:GetService("Players") or cloneref(game:GetService("Players")) or game.Players or
                            game:FindService("Players")
                        for i, v in pairs(Players:GetChildren()) do
                            if getgenv().singlePlayerTable[v.Name] then
                                return v
                            end
                        end
                        return nil
                    end

                    local thePlayer = getThatPlr()

                    if thePlayer then
                        print(
                            "Found Player: " ..
                                tostring(thePlayer.Name) ..
                                    ", DisplayName: " ..
                                        tostring(thePlayer.DisplayName) .. ", UserID: " .. tostring(thePlayer.UserId)
                        )
                    else
                        getgenv().copyAllWhitelistedAnims = false
                        return Rayfield:Notify(
                            {
                                Title = "[ERROR]: 0",
                                Content = "Player was not found!",
                                Duration = 7,
                                Image = 4483362458,
                                Actions = {
                                    Ignore = {
                                        Name = "Okay!",
                                        Callback = function()
                                            print("...")
                                        end
                                    }
                                }
                            }
                        )
                    end

                    local Players =
                        game:GetService("Players") or cloneref(game:GetService("Players")) or game.Players or
                        game:FindService("Players")
                    local LocalPlayer = Players.LocalPlayer
                    local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                    local Humanoid = Character:FindFirstChildWhichIsA("Humanoid") or Character:WaitForChild("Humanoid")
                    local TheirCharacter = thePlayer.Character or thePlayer.CharacterAdded:Wait()
                    local GetTheirHumanoid =
                        TheirCharacter:FindFirstChildWhichIsA("Humanoid") or TheirCharacter:WaitForChild("Humanoid")

                    if thePlayer then
                        print(
                            "Found Player: " ..
                                tostring(thePlayer.Name) ..
                                    ", DisplayName: " ..
                                        tostring(thePlayer.DisplayName) .. ", UserID: " .. tostring(thePlayer.UserId)
                        )
                    else
                        return Rayfield:Notify(
                            {
                                Title = "[ERROR]: 0",
                                Content = "Player was not found!",
                                Duration = 7,
                                Image = 4483362458,
                                Actions = {
                                    Ignore = {
                                        Name = "Okay!",
                                        Callback = function()
                                            print("...")
                                        end
                                    }
                                }
                            }
                        )
                    end

                    for _, animTrack in pairs(Humanoid:GetPlayingAnimationTracks()) do
                        animTrack:Stop()
                    end

                    local getTheirChar = thePlayer.Character or thePlayer.CharacterAdded:Wait()
                    local theirHumanoid =
                        getTheirChar:FindFirstChildWhichIsA("Humanoid") or getTheirChar:WaitForChild("Humanoid")

                    local function copyAnimations()
                        for _, animTrack in pairs(Humanoid:GetPlayingAnimationTracks()) do
                            animTrack:Stop()
                        end

                        for _, animTrack in pairs(theirHumanoid:GetPlayingAnimationTracks()) do
                            if not string.find(animTrack.Animation.AnimationId, "507768375") then
                                local copiedAnim = Humanoid:LoadAnimation(animTrack.Animation)
                                copiedAnim:Play(0.1, 1, animTrack.Speed)
                                copiedAnim.TimePosition = animTrack.TimePosition

                                task.spawn(
                                    function()
                                        animTrack.Stopped:Wait()
                                        copiedAnim:Stop()
                                        copiedAnim:Destroy()
                                    end
                                )
                            end
                        end
                    end

                    getgenv().copyAllWhitelistedAnims = true
                    while getgenv().copyAllWhitelistedAnims == true do
                        wait(.4)
                        copyAnimations()
                    end
                else
                    getgenv().copyAllWhitelistedAnims = false
                    wait()
                    repeat
                        wait()
                    until getgenv().copyAllWhitelistedAnims == false
                    wait(0.3)
                    getgenv().singlePlayerTable = getgenv().singlePlayerTable or {}

                    function getThatPlr()
                        local Players = game:GetService("Players")
                        for i, v in pairs(Players:GetChildren()) do
                            if getgenv().singlePlayerTable[v.Name] then
                                return v
                            end
                        end
                        return nil
                    end

                    local thePlayer = getThatPlr()

                    if thePlayer then
                        print(
                            "Found Player: " ..
                                tostring(thePlayer.Name) ..
                                    ", DisplayName: " ..
                                        tostring(thePlayer.DisplayName) .. ", UserID: " .. tostring(thePlayer.UserId)
                        )
                    else
                        return Rayfield:Notify(
                            {
                                Title = "[ERROR]: 0",
                                Content = "Player was not found!",
                                Duration = 7,
                                Image = 4483362458,
                                Actions = {
                                    Ignore = {
                                        Name = "Okay!",
                                        Callback = function()
                                            print("...")
                                        end
                                    }
                                }
                            }
                        )
                    end

                    local Players =
                        game:GetService("Players") or cloneref(game:GetService("Players")) or game.Players or
                        game:FindService("Players")
                    local LocalPlayer = Players.LocalPlayer
                    local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                    local Humanoid = Character:FindFirstChildWhichIsA("Humanoid") or Character:WaitForChild("Humanoid")
                    local TheirCharacter = thePlayer.Character or thePlayer.CharacterAdded:Wait()
                    local GetTheirHumanoid =
                        TheirCharacter:FindFirstChildWhichIsA("Humanoid") or TheirCharacter:WaitForChild("Humanoid")

                    if thePlayer then
                        print(
                            "Found Player: " ..
                                tostring(thePlayer.Name) ..
                                    ", DisplayName: " ..
                                        tostring(thePlayer.DisplayName) .. ", UserID: " .. tostring(thePlayer.UserId)
                        )
                    else
                        return Rayfield:Notify(
                            {
                                Title = "[ERROR]: 0",
                                Content = "Player was not found!",
                                Duration = 7,
                                Image = 4483362458,
                                Actions = {
                                    Ignore = {
                                        Name = "Okay!",
                                        Callback = function()
                                            print("...")
                                        end
                                    }
                                }
                            }
                        )
                    end

                    for _, animTrack in pairs(Humanoid:GetPlayingAnimationTracks()) do
                        animTrack:Stop()
                    end

                    local getTheirChar = thePlayer.Character or thePlayer.CharacterAdded:Wait()
                    local theirHumanoid =
                        getTheirChar:FindFirstChildWhichIsA("Humanoid") or getTheirChar:WaitForChild("Humanoid")

                    local function stopAnimations()
                        for _, animTrack in pairs(theirHumanoid:GetPlayingAnimationTracks()) do
                            animTrack:Stop()
                        end
                    end

                    for i = 1, 10 do
                        stopAnimations()
                    end
                end
            end
        }
    )

    local StopTheEmotes =
        Tab14:CreateButton(
        {
            Name = "Stop All Emotes",
            Callback = function()
                getgenv().singlePlayerTable = getgenv().singlePlayerTable or {}

                function getThatPlr()
                    local Players =
                        game:GetService("Players") or cloneref(game:GetService("Players")) or game.Players or
                        game:FindService("Players")
                    for i, v in pairs(Players:GetChildren()) do
                        if getgenv().singlePlayerTable[v.Name] then
                            return v
                        end
                    end
                    return nil
                end

                local thePlayer = getThatPlr()

                if thePlayer then
                    print(
                        "Found Player: " ..
                            tostring(thePlayer.Name) ..
                                ", DisplayName: " ..
                                    tostring(thePlayer.DisplayName) .. ", UserID: " .. tostring(thePlayer.UserId)
                    )
                else
                    return Rayfield:Notify(
                        {
                            Title = "[ERROR]: 0",
                            Content = "Player was not found!",
                            Duration = 7,
                            Image = 4483362458,
                            Actions = {
                                Ignore = {
                                    Name = "Okay!",
                                    Callback = function()
                                        print("...")
                                    end
                                }
                            }
                        }
                    )
                end

                local Players =
                    game:GetService("Players") or cloneref(game:GetService("Players")) or game.Players or
                    game:FindService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local Humanoid = Character:FindFirstChildWhichIsA("Humanoid") or Character:WaitForChild("Humanoid")
                local TheirCharacter = thePlayer.Character or thePlayer.CharacterAdded:Wait()
                local GetTheirHumanoid =
                    TheirCharacter:FindFirstChildWhichIsA("Humanoid") or TheirCharacter:WaitForChild("Humanoid")

                if thePlayer then
                    print(
                        "Found Player: " ..
                            tostring(thePlayer.Name) ..
                                ", DisplayName: " ..
                                    tostring(thePlayer.DisplayName) .. ", UserID: " .. tostring(thePlayer.UserId)
                    )
                else
                    return Rayfield:Notify(
                        {
                            Title = "[ERROR]: 0",
                            Content = "Player was not found!",
                            Duration = 7,
                            Image = 4483362458,
                            Actions = {
                                Ignore = {
                                    Name = "Okay!",
                                    Callback = function()
                                        print("...")
                                    end
                                }
                            }
                        }
                    )
                end

                for _, animTrack in pairs(Humanoid:GetPlayingAnimationTracks()) do
                    animTrack:Stop()
                end

                local getTheirChar = thePlayer.Character or thePlayer.CharacterAdded:Wait()
                local theirHumanoid =
                    getTheirChar:FindFirstChildWhichIsA("Humanoid") or getTheirChar:WaitForChild("Humanoid")

                local function stopAnimations()
                    for _, animTrack in pairs(theirHumanoid:GetPlayingAnimationTracks()) do
                        animTrack:Stop()
                    end
                end

                stopAnimations()
            end
        }
    )

    local PlayEmoteWithIDNum =
        Tab12:CreateInput(
        {
            Name = "Play Emote (ID)",
            PlaceholderText = "Enter ID",
            RemoveTextAfterFocusLost = true,
            Callback = function(getTheIDForEmote)
                local getNumberID = tonumber(getTheIDForEmote) or getTheIDForEmote
                local Players =
                    game:GetService("Players") or cloneref(game:GetService("Players")) or game.Players or
                    game:FindService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local Humanoid = Character:FindFirstChildWhichIsA("Humanoid") or Character:WaitForChild("Humanoid")
                local HumanoidRootPart =
                    Character:FindFirstChild("HumanoidRootPart") or Character:WaitForChild("HumanoidRootPart")

                local succ, err =
                    pcall(
                    function()
                        Humanoid:PlayEmoteAndGetAnimTrackById(getNumberID)
                    end
                )

                if succ then
                    Humanoid:PlayEmoteAndGetAnimTrackById(getNumberID)
                else
                    return Rayfield:Notify(
                        {
                            Title = "Error:",
                            Content = tostring(err),
                            Duration = 7,
                            Image = 4483362458,
                            Actions = {
                                Ignore = {
                                    Name = "Okay!",
                                    Callback = function()
                                        print("...")
                                    end
                                }
                            }
                        }
                    )
                end
            end
        }
    )

    local StopTheEmotes =
        Tab12:CreateButton(
        {
            Name = "Stop Emoting",
            Callback = function()
                local Players =
                    game:GetService("Players") or cloneref(game:GetService("Players")) or game.Players or
                    game:FindService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local Humanoid =
                    Character:FindFirstChildWhichIsA("Humanoid") or Character:WaitForChild("Humanoid") or
                    Character:FindFirstChild("Humanoid") or
                    Character:WaitForChild("Humanoid", 60) or
                    LocalPlayer.Character:FindFirstChildWhichIsA("Humanoid")

                for _, animTrack in pairs(Humanoid:GetPlayingAnimationTracks()) do
                    animTrack:Stop()
                end
            end
        }
    )
    wait()
    local GetWorkspace = game:GetService("Workspace")
    local PartStorageFolder = GetWorkspace:WaitForChild("PartStorage") or GetWorkspace:FindFirstChild("PartStorage")
    local FindBaseplate =
        PartStorageFolder:WaitForChild("BASEPLATE_CLONE_ANTI_VOID") or
        PartStorageFolder:FindFirstChild("BASEPLATE_CLONE_ANTI_VOID")
    if FindBaseplate then
        FindBaseplate.Material = Enum.Material.Air
        wait()
        FindBaseplate.Transparency = 1
    else
        warn("??? - BASEPLATE")
    end
    wait()
    local MakeBaseplateVis =
        Tab16:CreateToggle(
        {
            Name = "Baseplate Visible",
            CurrentValue = false,
            Flag = "MakingBaseplateVisible",
            Callback = function(makeVis)
                if makeVis then
                    getgenv().MakingVisible = true
                    if getgenv().MakingVisible == true then
                        local GetWorkspace = game:GetService("Workspace")
                        local PartStorageFolder =
                            GetWorkspace:WaitForChild("PartStorage") or GetWorkspace:FindFirstChild("PartStorage")
                        local FindBaseplate =
                            PartStorageFolder:WaitForChild("BASEPLATE_CLONE_ANTI_VOID") or
                            PartStorageFolder:FindFirstChild("BASEPLATE_CLONE_ANTI_VOID")
                        if FindBaseplate then
                            FindBaseplate.Transparency = 0
                        end
                    end
                else
                    getgenv().MakingVisible = false
                    wait()
                    local GetWorkspace = game:GetService("Workspace")
                    local PartStorageFolder =
                        GetWorkspace:WaitForChild("PartStorage") or GetWorkspace:FindFirstChild("PartStorage")
                    local FindBaseplate =
                        PartStorageFolder:WaitForChild("BASEPLATE_CLONE_ANTI_VOID") or
                        PartStorageFolder:FindFirstChild("BASEPLATE_CLONE_ANTI_VOID")
                    if FindBaseplate then
                        FindBaseplate.Transparency = 1
                    end
                end
            end
        }
    )

    local quickAvChange =
        Tab13:CreateToggle(
        {
            Name = "Change Avatar Quick [WILL Lag!⚠️]",
            CurrentValue = false,
            Flag = "quickAvChange",
            Callback = function(quickAv)
                if quickAv then
                    getgenv().ava_switch = true

                    local usernames = {
                        "DenisDaily",
                        "ItsFunneh",
                        "Flamingo",
                        "KreekCraft",
                        "GamingWithKev",
                        "RussoTalks",
                        "Tofuu",
                        "Sketch",
                        "AshleytheUnicorn",
                        "TanqR",
                        "LeahAshe",
                        "Thinknoodles",
                        "iamSanna",
                        "FGTEEV",
                        "ZacharyZaxor",
                        "Builderman",
                        "Roblox",
                        "Minitoon",
                        "Asimo3089",
                        "Badcc",
                        "Callmehbob",
                        "Loleris",
                        "Beeism",
                        "MeganPlays",
                        "ChadAlly",
                        "AussieVixen",
                        "Thinknoodles",
                        "GDad",
                        "SuperShiftery",
                        "SimplyBlox",
                        "MeganPlays",
                        "GoldenGlove",
                        "TeraBrite"
                    }

                    local function gatherCurrentPlayers()
                        local players = game:GetService("Players")
                        for _, player in ipairs(players:GetPlayers()) do
                            table.insert(usernames, player.Name)
                        end
                    end

                    gatherCurrentPlayers()

                    while getgenv().ava_switch == true do
                        wait()
                        for _, username in ipairs(usernames) do
                            local args = {
                                [1] = username
                            }

                            game:GetService("ReplicatedStorage"):WaitForChild("ModifyUsername"):FireServer(unpack(args))
                        end
                    end
                else
                    getgenv().ava_switch = false
                    wait(0.3)
                    local args = {
                        [1] = tostring(game.Players.LocalPlayer.Name)
                    }

                    game:GetService("ReplicatedStorage"):WaitForChild("ModifyUsername"):FireServer(unpack(args))
                end
            end
        }
    )

    local CollisionForBaseplate =
        Tab16:CreateToggle(
        {
            Name = "Turn Collision Off/On",
            CurrentValue = false,
            Flag = "CollisionFlagBaseplate",
            Callback = function(CollisionFieldBaseplate)
                local GetWorkspace = cloneref(game:GetService("Workspace")) or game:GetService("Workspace")
                local PartStorageFolder =
                    GetWorkspace:WaitForChild("PartStorage") or GetWorkspace:FindFirstChild("PartStorage")
                local FindBaseplate =
                    PartStorageFolder:WaitForChild("BASEPLATE_CLONE_ANTI_VOID") or
                    PartStorageFolder:FindFirstChild("BASEPLATE_CLONE_ANTI_VOID")

                if CollisionFieldBaseplate then
                    local GetWorkspace = cloneref(game:GetService("Workspace")) or game:GetService("Workspace")
                    local PartStorageFolder =
                        GetWorkspace:WaitForChild("PartStorage") or GetWorkspace:FindFirstChild("PartStorage")
                    local FindBaseplate =
                        PartStorageFolder:WaitForChild("BASEPLATE_CLONE_ANTI_VOID") or
                        PartStorageFolder:FindFirstChild("BASEPLATE_CLONE_ANTI_VOID")
                    getgenv().doCollisionField = true
                    if getgenv().doCollisionField == true then
                        FindBaseplate.CanCollide = false
                    end
                else
                    local GetWorkspace = cloneref(game:GetService("Workspace")) or game:GetService("Workspace")
                    local PartStorageFolder =
                        GetWorkspace:WaitForChild("PartStorage") or GetWorkspace:FindFirstChild("PartStorage")
                    local FindBaseplate =
                        PartStorageFolder:WaitForChild("BASEPLATE_CLONE_ANTI_VOID") or
                        PartStorageFolder:FindFirstChild("BASEPLATE_CLONE_ANTI_VOID")
                    FindBaseplate.CanCollide = true
                    wait()
                    getgenv().doCollisionField = false
                    if FindBaseplate.CanCollide == false and getgenv().doCollisionField == true then
                        getgenv().doCollisionField = false
                        wait()
                        Rayfield:Notify(
                            {
                                Title = "[Note]: Read This:",
                                Content = "You have disabled CanCollide, we turned off the loop.",
                                Duration = 7,
                                Image = 4483362458,
                                Actions = {
                                    Ignore = {
                                        Name = "Okay!",
                                        Callback = function()
                                            print("...")
                                        end
                                    }
                                }
                            }
                        )
                        wait()
                        Rayfield:Notify(
                            {
                                Title = "[OUTPUT]: CanCollide:",
                                Content = "CanCollide = false, Loop: OFF",
                                Duration = 7,
                                Image = 4483362458,
                                Actions = {
                                    Ignore = {
                                        Name = "Okay!",
                                        Callback = function()
                                            print("...")
                                        end
                                    }
                                }
                            }
                        )
                    end
                end
            end
        }
    )

    local AutoChangingBooth =
        Tab11:CreateToggle(
        {
            Name = "Quick Changing Booth",
            CurrentValue = false,
            Flag = "ChangingBoothFast",
            Callback = function(crazy)
                local Replicated_Storage =
                    game:GetService("ReplicatedStorage") or cloneref(game:GetService("ReplicatedStorage")) or
                    game.ReplicatedStorage or
                    game:FindService("ReplicatedStorage")
                local Booth_Remote =
                    Replicated_Storage:FindFirstChild("UpdateBoothText") or
                    Replicated_Storage:WaitForChild("UpdateBoothText")

                local function getStall()
                    for i, v in pairs(game:GetService("Workspace").Booth:GetChildren()) do
                        if
                            v.User.SurfaceGui.ImageLabel.Image ==
                                "https://www.roblox.com/headshot-thumbnail/image?userId=" ..
                                    tostring(game.Players.LocalPlayer.UserId) .. "&width=420&height=420&format=png"
                         then
                            return v
                        end
                    end
                    return nil
                end

                if crazy then
                    wait()
                    local Stall = getStall()

                    if not Stall then
                        return Rayfield:Notify(
                            {
                                Title = "Error: No Booth",
                                Content = "You do not own a booth!",
                                Duration = 7,
                                Image = 4483362458,
                                Actions = {
                                    Ignore = {
                                        Name = "Okay!",
                                        Callback = function()
                                            print("...")
                                        end
                                    }
                                }
                            }
                        )
                    end

                    local write_words = {
                        "Zacks Easy Hub [WINNING]!",
                        "Join: VJh3kkYzBn",
                        "Zacks Easy Hub [WE UP]!",
                        "Zacks Easy Hub V6, POWERFUL!",
                        "Powering Automation | Scripting",
                        "Zacks Easy Hub | WE OP!",
                        "Zacks Easy Hub | V6-BETA",
                        "Zacks Easy Hub | WE SIGMA",
                        "BEST FREE SCRIPT RN!",
                        "WE ARE TAKING OVER, JOIN US!",
                        "IF YOU DONT JOIN, YOUR NOT SIGMA"
                    }

                    local function select_words()
                        local randomIndex = math.random(1, #write_words)
                        return write_words[randomIndex]
                    end

                    local booth_colors = {
                        "Teal",
                        "Gray",
                        "Red"
                    }

                    local function color_selector()
                        local randomIndex = math.random(1, #booth_colors)
                        return booth_colors[randomIndex]
                    end

                    local booth_fonts = {
                        "DenkOne",
                        "GrenzeGotisch",
                        "SourceSans"
                    }

                    local function font_selector()
                        local randomIndex = math.random(1, #booth_fonts)
                        return booth_fonts[randomIndex]
                    end

                    getgenv().Auto = true
                    while getgenv().Auto == true do
                        wait()
                        local args = {
                            [1] = tostring(select_words()),
                            [2] = tostring(color_selector()),
                            [3] = tostring(font_selector())
                        }

                        Booth_Remote:FireServer(unpack(args))
                    end
                else
                    getgenv().Auto = false
                end
            end
        }
    )

    local InfoLabelParagraph = Tab13:CreateParagraph({Title = "Information:", Content = "Type 'stop' to stop flying."})
    wait()
    local InfoLabelParagraph = Tab13:CreateParagraph({Title = "Controls:", Content = "Space = Up | Q = Down"})
    wait()
    local getHoverboardFlyInput =
        Tab13:CreateInput(
        {
            Name = "Hoverboard Fly",
            PlaceholderText = "Speed",
            RemoveTextAfterFocusLost = true,
            Callback = function(GetSpeed)
                if tonumber(GetSpeed) then
                    local args = {
                        [1] = "Hoverboard"
                    }

                    game:GetService("ReplicatedStorage"):WaitForChild("ToolEvent"):FireServer(unpack(args))
                    wait(0.2)
                    local Players =
                        game:GetService("Players") or cloneref(game:GetService("Players")) or game.Players or
                        game:FindService("Players")
                    local LocalPlayer = Players.LocalPlayer
                    local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()

                    if LocalPlayer.Backpack:FindFirstChild("Hoverboard") then
                        LocalPlayer.Backpack:FindFirstChild("Hoverboard").Parent = Character
                    elseif Character:FindFirstChild("Hoverboard") then
                        warn("Hoverboard is already in Character")
                    elseif
                        (not LocalPlayer.Backpack:FindFirstChild("Hoverboard") and
                            Character:FindFirstChild("Hoverboard"))
                     then
                        warn("Hoverboard is nil, and cannot be found! Resetting you...")
                        wait(0.3)
                        Character:FindFirstChildWhichIsA("Humanoid").Health = 0
                    end
                    wait(0.5)
                    local player = game.Players.LocalPlayer
                    local character = player.Character or player.CharacterAdded:Wait()
                    local humanoidRootPart =
                        character:WaitForChild("HumanoidRootPart") or character:FindFirstChild("HumanoidRootPart")
                    getgenv().flying = false
                    getgenv().speed = tonumber(GetSpeed)
                    local bodyGyro = nil
                    local bodyVelocity = nil

                    local function startFly()
                        flying = true
                        bodyGyro = Instance.new("BodyGyro")
                        bodyGyro.MaxTorque = Vector3.new(0, 400000, 0)
                        bodyGyro.CFrame = humanoidRootPart.CFrame
                        bodyGyro.Parent = humanoidRootPart
                        bodyVelocity = Instance.new("BodyVelocity")
                        bodyVelocity.MaxForce = Vector3.new(1e4, 1e4, 1e4)
                        bodyVelocity.Velocity = Vector3.new(0, 0, 0)
                        bodyVelocity.Parent = humanoidRootPart
                        character.Humanoid.PlatformStand = true
                    end

                    local function updateFly()
                        if flying then
                            local moveDirection = Vector3.new(0, 0, 0)
                            local camera = workspace.CurrentCamera
                            local lookVector = camera.CFrame.LookVector
                            if game:GetService("UserInputService"):IsKeyDown(Enum.KeyCode.W) then
                                moveDirection = moveDirection + lookVector
                            end
                            if game:GetService("UserInputService"):IsKeyDown(Enum.KeyCode.S) then
                                moveDirection = moveDirection - lookVector
                            end
                            if game:GetService("UserInputService"):IsKeyDown(Enum.KeyCode.A) then
                                moveDirection = moveDirection - camera.CFrame.RightVector
                            end
                            if game:GetService("UserInputService"):IsKeyDown(Enum.KeyCode.D) then
                                moveDirection = moveDirection + camera.CFrame.RightVector
                            end
                            if game:GetService("UserInputService"):IsKeyDown(Enum.KeyCode.Space) then
                                moveDirection = moveDirection + Vector3.new(0, 1, 0)
                            end
                            if game:GetService("UserInputService"):IsKeyDown(Enum.KeyCode.Q) then
                                moveDirection = moveDirection - Vector3.new(0, 1, 0)
                            end
                            if moveDirection.Magnitude > 0 then
                                bodyVelocity.Velocity = moveDirection.Unit * tonumber(getgenv().speed)
                            else
                                bodyVelocity.Velocity = Vector3.new(0, 0, 0)
                            end
                            bodyGyro.CFrame =
                                CFrame.new(
                                humanoidRootPart.Position,
                                humanoidRootPart.Position + Vector3.new(lookVector.X, 0, lookVector.Z)
                            )
                        end
                    end

                    game:GetService("RunService").RenderStepped:Connect(
                        function()
                            if flying then
                                updateFly()
                            end
                        end
                    )

                    startFly()
                elseif tostring(GetSpeed) or GetSpeed == "stop" then
                    local Players = game:GetService("Players")
                    local RunService = game:GetService("RunService")
                    local ReplicatedStorage = game:GetService("ReplicatedStorage")
                    local LocalPlayer = Players.LocalPlayer
                    wait(0.3)
                    getgenv().flyLoop = false
                    wait(0.2)
                    local Players = game:GetService("Players")
                    local player = Players.LocalPlayer
                    local character = player.Character or player.CharacterAdded:Wait()
                    local humanoidRootPart =
                        character:WaitForChild("HumanoidRootPart") or character:FindFirstChild("HumanoidRootPart")
                    local Humanoid =
                        character:FindFirstChildWhichIsA("Humanoid") or character:WaitForChild("Humanoid") or
                        character:FindFirstChildOfClass("Humanoid") or
                        character:FindFirstChild("Humanoid")

                    local function stopFly()
                        if humanoidRootPart:FindFirstChild("BodyGyro") then
                            humanoidRootPart.BodyGyro:Destroy()
                        end
                        if humanoidRootPart:FindFirstChild("BodyVelocity") then
                            humanoidRootPart.BodyVelocity:Destroy()
                        end
                        character.Humanoid.PlatformStand = false
                        getgenv().flyLoop = false
                    end
                    wait(0.1)
                    stopFly()
                    wait(0.3)
                    game:GetService("ReplicatedStorage"):WaitForChild("DeleteInventory"):FireServer()
                elseif tonumber(GetSpeed) and getgenv().flying == true then
                    getgenv().speed = tonumber(GetSpeed)
                end
            end
        }
    )

    local tpToAvatarUI =
        Tab1:CreateButton(
        {
            Name = "Teleport To Avatar-UI",
            Callback = function()
                local Workspace_Service = game:GetService("Workspace") or cloneref(game:GetService("Workspace"))
                local Avatar_UI =
                    Workspace_Service:FindFirstChild("AvatarUI") or Workspace_Service:WaitForChild("AvatarUI")
                local Players = game:GetService("Players") or cloneref(game:GetService("Players"))
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()

                Character:PivotTo(Avatar_UI:GetPivot())
            end
        }
    )

    local AutoLikingPlayer =
        Tab1:CreateToggle(
        {
            Name = "[Avatar-UI]: Auto Like Player",
            CurrentValue = false,
            Flag = "likingPlayerAuto",
            Callback = function(likeLol)
                local Workspace_Service =
                    game:GetService("Workspace") or cloneref(game:GetService("Workspace")) or workspace or
                    game.Workspace or
                    game:FindService("Workspace")
                local Avatar_UI =
                    Workspace_Service:FindFirstChild("AvatarUI") or Workspace_Service:WaitForChild("AvatarUI")
                local Like_Button = Avatar_UI:FindFirstChild("LikeButton") or Avatar_UI:WaitForChild("LikeButton")
                local Click_Detector_Input =
                    Like_Button:FindFirstChild("ClickDetector") or Like_Button.ClickDetector or
                    Like_Button:FindFirstChildWhichIsA("ClickDetector") or
                    Like_Button:WaitForChild("ClickDetector") or
                    Like_Button:FindFirstChildOfClass("ClickDetector")

                if likeLol then
                    getgenv().alrLike = true
                    while getgenv().alrLike == true do
                        wait()
                        fireclickdetector(Click_Detector_Input)
                    end
                else
                    getgenv().alrLike = false
                end
            end
        }
    )

    local dislikePlayersAvatar =
        Tab1:CreateToggle(
        {
            Name = "[Avatar-UI]: Auto Dislike Player",
            CurrentValue = false,
            Flag = "dislikingEverybody",
            Callback = function(dislikeButton)
                local Workspace_Service =
                    game:GetService("Workspace") or cloneref(game:GetService("Workspace")) or workspace or
                    game.Workspace or
                    game:FindService("Workspace")
                local Avatar_UI =
                    Workspace_Service:FindFirstChild("AvatarUI") or Workspace_Service:WaitForChild("AvatarUI")
                local Like_Button = Avatar_UI:FindFirstChild("DislikeButton") or Avatar_UI:WaitForChild("DislikeButton")
                local Click_Detector_Input =
                    Like_Button:FindFirstChild("ClickDetector") or Like_Button.ClickDetector or
                    Like_Button:FindFirstChildWhichIsA("ClickDetector") or
                    Like_Button:WaitForChild("ClickDetector") or
                    Like_Button:FindFirstChildOfClass("ClickDetector")

                if dislikeButton then
                    if fireclickdetector then
                        getgenv().Disliking = true
                        while getgenv().Disliking == true do
                            wait()
                            fireclickdetector(Click_Detector_Input)
                        end
                    elseif not fireclickdetector then
                        getgenv().Disliking = false
                    end
                else
                    getgenv().Disliking = false
                end
            end
        }
    )

    local function Notify_User(title, content, time)
        Rayfield:Notify(
            {
                Title = tostring(title),
                Content = tostring(content),
                Duration = tonumber(time),
                Image = 4483362458,
                Actions = {
                    Ignore = {
                        Name = "Okay!",
                        Callback = function()
                            print("...")
                        end
                    }
                }
            }
        )
    end

    local Music_Player =
        Tab1:CreateButton(
        {
            Name = "Shuffle In-Game Music",
            Callback = function()
                local Local_Player = game:GetService("Players").LocalPlayer
                local Shuffle_Music_Frame =
                    Local_Player:WaitForChild("PlayerGui"):WaitForChild("Menu"):WaitForChild("Background"):WaitForChild(
                    "Music"
                ):WaitForChild("Shuffle")
                local Signals = {
                    "Activated",
                    "MouseButton1Down",
                    "MouseButton2Down",
                    "MouseButton1Click",
                    "MouseButton2Click"
                }

                if firesignal then
                    for _, v in pairs(Shuffle_Music_Frame:GetDescendants()) do
                        if v:IsA("ImageButton") or v:IsA("TextButton") then
                            for i, Signal in pairs(Signals) do
                                firesignal(v[Signal])
                            end
                        end
                    end
                else
                    return Notify_User("Error:", "Your executor does not support 'firesignal'!", 6)
                end
            end
        }
    )

    local Music_Player =
        Tab1:CreateToggle(
        {
            Name = "Loop Shuffle In-Game Music",
            CurrentValue = false,
            Flag = "ToggleInGameMusic",
            Callback = function(ingame_music)
                if ingame_music then
                    getgenv().plr_music_menu = true
                    local Local_Player = game:GetService("Players").LocalPlayer
                    local PlayerGui = Local_Player:WaitForChild("PlayerGui")
                    local Menu = PlayerGui:WaitForChild("Menu")
                    local Background = Menu:WaitForChild("Background")
                    local Music = Background:WaitForChild("Music")
                    local Stop = Music:WaitForChild("Stop")
                    local Shuffle_Music_Frame = Music:WaitForChild("Shuffle")
                    local Signals = {
                        "Activated",
                        "MouseButton1Down",
                        "MouseButton2Down",
                        "MouseButton1Click",
                        "MouseButton2Click"
                    }

                    if firesignal then
                        while getgenv().plr_music_menu == true do
                            task.wait(1)
                            for _, v in pairs(Shuffle_Music_Frame:GetDescendants()) do
                                if v:IsA("ImageButton") or v:IsA("TextButton") then
                                    for i, Signal in pairs(Signals) do
                                        firesignal(v[Signal])
                                    end
                                end
                            end
                        end
                    else
                        return Notify_User("Error:", "Your executor does not support 'firesignal'!", 6)
                    end
                else
                    local Local_Player = game:GetService("Players").LocalPlayer
                    local PlayerGui = Local_Player:WaitForChild("PlayerGui")
                    local Menu = PlayerGui:WaitForChild("Menu")
                    local Background = Menu:WaitForChild("Background")
                    local Music = Background:WaitForChild("Music")
                    local Stop = Music:WaitForChild("Stop")
                    getgenv().plr_music_menu = false
                    task.wait(0.3)
                    if firesignal then
                        for _, v in pairs(Stop:GetDescendants()) do
                            if v:IsA("ImageButton") or v:IsA("TextButton") then
                                for i, Signal in pairs(Signals) do
                                    firesignal(v[Signal])
                                end
                            end
                        end
                    else
                        return
                    end
                end
            end
        }
    )

    local WhitelistFriendPlr =
        Tab1:CreateToggle(
        {
            Name = "[Avatar-UI] Only Like Friend",
            CurrentValue = false,
            Flag = "LikingOnlyFriends",
            Callback = function(myFriendsLiked)
                if myFriendsLiked then
                    local Workspace_Service = game:GetService("Workspace") or cloneref(game:GetService("Workspace"))
                    local Avatar_UI = Workspace_Service:WaitForChild("AvatarUI")
                    local Like_Button = Avatar_UI:FindFirstChild("LikeButton") or Avatar_UI:WaitForChild("LikeButton")
                    local Click_Detector_Input = Like_Button:FindFirstChild("ClickDetector")
                    local Avatar_Part_UI = Avatar_UI:WaitForChild("AvatarUI")
                    local Image_Label = Avatar_Part_UI:WaitForChild("SurfaceGui"):WaitForChild("ImageLabel")
                    local Players = game:GetService("Players") or cloneref(game:GetService("Players"))
                    local Local_Player = Players.LocalPlayer

                    function Get_Friend_Func()
                        for _, player in pairs(Players:GetPlayers()) do
                            if player:IsFriendsWith(Local_Player.UserId) then
                                return player
                            end
                        end
                        return nil
                    end

                    local Friends = Get_Friend_Func()

                    if not Friends then
                        getgenv().Like_Friends = false
                        return Notify_User("Error:", "There isn't any friends in this server!", 6)
                    end

                    getgenv().Like_Friends = true
                    while getgenv().Like_Friends == true do
                        wait()
                        local expectedURL = "rbxthumb://type=Avatar&id=" .. tostring(Friends.UserId) .. "&w=420&h=420"
                        if Image_Label.Image == expectedURL then
                            fireclickdetector(Click_Detector_Input, 999)
                        end
                    end
                else
                    getgenv().Like_Friends = false
                end
            end
        }
    )

    local SoMuchLagInVC =
        Tab1:CreateToggle(
        {
            Name = "Laggy Voice (Broken)",
            CurrentValue = false,
            Flag = "LaggyAssVoice",
            Callback = function(voices)
                local Rep_Storage = game:GetService("ReplicatedStorage")
                local V_Effect_Remote = Rep_Storage:FindFirstChild("VEffect") or Rep_Storage:WaitForChild("VEffect")

                if voices then
                    getgenv().shuffleVoices = true
                    while getgenv().shuffleVoices == true do
                        wait()
                        for i = 1, 5 do
                            local args = {
                                [1] = "Normal"
                            }

                            V_Effect_Remote:FireServer(unpack(args))
                            local args = {
                                [1] = "Chorus"
                            }

                            V_Effect_Remote:FireServer(unpack(args))
                            local args = {
                                [1] = "Darling"
                            }

                            V_Effect_Remote:FireServer(unpack(args))
                            local args = {
                                [1] = "Demon"
                            }

                            V_Effect_Remote:FireServer(unpack(args))
                            local args = {
                                [1] = "Elf"
                            }

                            V_Effect_Remote:FireServer(unpack(args))
                            local args = {
                                [1] = "Fun"
                            }

                            V_Effect_Remote:FireServer(unpack(args))
                            local args = {
                                [1] = "Low"
                            }

                            V_Effect_Remote:FireServer(unpack(args))
                            local args = {
                                [1] = "Reverb"
                            }

                            V_Effect_Remote:FireServer(unpack(args))
                        end
                    end
                else
                    local Rep_Storage = game:GetService("ReplicatedStorage")
                    local V_Effect_Remote = Rep_Storage:FindFirstChild("VEffect") or Rep_Storage:WaitForChild("VEffect")

                    getgenv().shuffleVoices = false
                    wait(1.5)
                    for i = 1, 150 do
                        local args = {
                            [1] = "Normal"
                        }

                        V_Effect_Remote:FireServer(unpack(args))
                    end
                end
            end
        }
    )

    local GotoPlayerBox =
        Tab13:CreateInput(
        {
            Name = "Goto/TP Player",
            CurrentValue = "",
            PlaceholderText = "User Here",
            RemoveTextAfterFocusLost = true,
            Flag = "TPToPlayerBo",
            Callback = function(get_player_func)
                local tp_pivot_plr = findplr(get_player_func)
                local Players = game:GetService("Players") or cloneref(game:GetService("Players"))
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()

                if not tp_pivot_plr then
                    return Notify_User("Error:", "Player not found or does not exist!", 6)
                end
                task.wait(.2)

                local tp_getpivot_char = tp_pivot_plr.Character

                if tp_getpivot_char then
                    Character:PivotTo(tp_getpivot_char:GetPivot())
                else
                    return
                end
            end
        }
    )

    local ViewPlrBox =
        Tab13:CreateInput(
        {
            Name = "View/Spectate Player",
            CurrentValue = "",
            PlaceholderText = "User Here",
            RemoveTextAfterFocusLost = true,
            Flag = "ViewPlrSpectating",
            Callback = function(do_plr_func)
                local tp_pivot_plr = findplr(do_plr_func)
                local Players = game:GetService("Players") or cloneref(game:GetService("Players"))
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local Workspace = game:GetService("Workspace") or cloneref(game:GetService("Workspace"))
                local Camera = Workspace:FindFirstChild("Camera")

                if not tp_pivot_plr then
                    return Notify_User("Error:", "Player not found or does not exist!", 6)
                end
                task.wait(.2)

                local spectate_char = tp_pivot_plr.Character

                if spectate_char then
                    Camera.CameraSubject = spectate_char
                else
                    return
                end
            end
        }
    )

    local UnviewPlr =
        Tab13:CreateButton(
        {
            Name = "Unview/Unspectate Player",
            Callback = function()
                local Workspace = game:GetService("Workspace") or cloneref(game:GetService("Workspace"))
                local Camera = Workspace:FindFirstChild("Camera")
                local Players = game:GetService("Players") or cloneref(game:GetService("Players"))
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()

                Camera.CameraSubject = Character
            end
        }
    )

    local MutingMyself =
        Tab1:CreateToggle(
        {
            Name = "Mute Yourself",
            CurrentValue = false,
            Flag = "IJustMutedMyself",
            Callback = function(muteYou)
                if muteYou then
                    getgenv().muting = true
                    if getgenv().muting == true then
                        game:GetService("Players").LocalPlayer.AudioDeviceInput.Muted = true
                    end
                else
                    getgenv().muting = false
                    wait()
                    game:GetService("Players").LocalPlayer.AudioDeviceInput.Muted = false
                end
            end
        }
    )

    local DelInventory =
        Tab5:CreateButton(
        {
            Name = "Delete Inventory",
            Callback = function()
                game:GetService("ReplicatedStorage"):WaitForChild("DeleteInventory"):FireServer()
            end
        }
    )

    function Tools_Grab_Func()
        -- [[ <> Old Method <> [In Use.] ]] --
        ----------------------------
        if firesignal then
            local Players = game:GetService("Players") or game.Players
            local LocalPlayer = Players.LocalPlayer
            local Player_Gui = LocalPlayer:WaitForChild("PlayerGui") or LocalPlayer:FindFirstChild("PlayerGui")
            local Menu_Frame = Player_Gui:WaitForChild("Menu") or Player_Gui:FindFirstChild("Menu")
            local Background_Frame = Menu_Frame:WaitForChild("Background") or Menu_Frame:FindFirstChild("Background")
            local Tool_Frame = Background_Frame:WaitForChild("Tool") or Background_Frame:FindFirstChild("Tool")
            local Scrolling_Frame_Tool_Menu =
                Tool_Frame:WaitForChild("ScrollingFrame") or Tool_Frame:FindFirstChild("ScrollingFrame")

            function send_signal_connection(signal_parent)
                if not firesignal then
                    return warn("'firesignal' is unsupported on this executor! [missing: 'firesignal']")
                end

                local Signals = {
                    "Activated",
                    "MouseButton1Down",
                    "MouseButton2Down",
                    "MouseButton1Click",
                    "MouseButton2Click"
                }

                for _, v in pairs(signal_parent:GetDescendants()) do
                    if v:IsA("ImageButton") or v:IsA("TextButton") then
                        for i, Signal in pairs(Signals) do
                            firesignal(v[Signal])
                        end
                    else
                        return
                    end
                end
            end

            for i, v in pairs(Scrolling_Frame_Tool_Menu:GetDescendants()) do
                if
                    v:IsA("Frame") or v:FindFirstChildOfClass("Frame") or v:FindFirstChildWhichIsA("Frame") or
                        v.ClassName == "Frame"
                 then
                    send_signal_connection(v)
                end
            end
        else
            --[[local gamePassId = 951459548

            local function verify_pass()
                local success, hasPass = pcall(function()
                    return game:GetService("MarketplaceService"):UserOwnsGamePassAsync(game.Players.LocalPlayer.UserId, gamePassId)
                end)
                if success then
                    return hasPass
                else
                    warn("Error checking game pass ownership:", hasPass)
                    return false
                end
            end

            local check_gamepass = verify_pass()

            if not check_gamepass then
                getgenv().shouldGrabTools = false
                return Notify_User("Error:", "You don't have the required 'Admin' GamePass!", 6)
            end--]]
            local Rep_Storage = game:GetService("ReplicatedStorage")
            local Tool_Event = Rep_Storage:FindFirstChild("ToolEvent") or Rep_Storage:WaitForChild("ToolEvent")

            Tool_Event:FireServer("Bag")
            Tool_Event:FireServer("Brick")
            Tool_Event:FireServer("Camera")
            Tool_Event:FireServer("Coil")
            Tool_Event:FireServer("Doll")
            Tool_Event:FireServer("Fit")
            Tool_Event:FireServer("Gun")
            Tool_Event:FireServer("Horrible")
            Tool_Event:FireServer("Hoverboard")
            Tool_Event:FireServer("Knife")
            Tool_Event:FireServer("Motor")
            Tool_Event:FireServer("Pistol")
            Tool_Event:FireServer("Spray")
            Tool_Event:FireServer("Suitbag")
            Tool_Event:FireServer("Tele")
            Tool_Event:FireServer("Torch")
            Tool_Event:FireServer("Vehicle")
            Tool_Event:FireServer("Wand")

            Notify_User("Alert!:", "If this did not work, you are affected by MIC UP's new changes.", 7)
        end
        ----------------------------
        -- [[ <> New Method <> ]] --
        ----------------------------
        --[[local Players = game:GetService("Players") or game.Players
        local LocalPlayer = Players.LocalPlayer
        local Player_Gui = LocalPlayer:WaitForChild("PlayerGui") or LocalPlayer:FindFirstChild("PlayerGui")
        local Menu_Frame = Player_Gui:WaitForChild("Menu") or Player_Gui:FindFirstChild("Menu")
        local Background_Frame = Menu_Frame:WaitForChild("Background") or Menu_Frame:FindFirstChild("Background")
        local Tool_Frame = Background_Frame:WaitForChild("Tool") or Background_Frame:FindFirstChild("Tool")
        local Scrolling_Frame_Tool_Menu = Tool_Frame:WaitForChild("ScrollingFrame") or Tool_Frame:FindFirstChild("ScrollingFrame")

        function send_signal_connection(signal_parent)
            if not firesignal then return warn("'firesignal' is unsupported on this executor! [missing: 'firesignal']") end

            local Signals = {"Activated", "MouseButton1Down", "MouseButton2Down", "MouseButton1Click", "MouseButton2Click"}

            for _,v in pairs(signal_parent:GetDescendants()) do
                if v:IsA("ImageButton") or v:IsA("TextButton") then
                    for i,Signal in pairs(Signals) do
                        firesignal(v[Signal])
                    end
                else
                    return 
                end
            end
        end

        for i, v in pairs(Scrolling_Frame_Tool_Menu:GetDescendants()) do
            if v:IsA("Frame") or v:FindFirstChildOfClass("Frame") or v:FindFirstChildWhichIsA("Frame") or v.ClassName == "Frame" then
                send_signal_connection(v)
            end
        end--]]
    end

    local GrabEverything =
        Tab5:CreateButton(
        {
            Name = "Grab All Tools",
            Callback = function()
                Tools_Grab_Func()
            end
        }
    )

    local getEverything =
        Tab5:CreateToggle(
        {
            Name = "Loop Grab All Tools",
            CurrentValue = false,
            Flag = "grabbedAllThat",
            Callback = function(grabFreeTools)
                local LocalPlayer = game:GetService("Players").LocalPlayer or game.Players.LocalPlayer

                if grabFreeTools then
                    getgenv().shouldGrabTools = true
                    while getgenv().shouldGrabTools == true do
                        wait()
                        Tools_Grab_Func()
                    end
                else
                    local Rep_Storage = game:GetService("ReplicatedStorage")
                    local Delete_Inv_Event =
                        Rep_Storage:WaitForChild("DeleteInventory") or Rep_Storage:FindFirstChild("DeleteInventory")
                    getgenv().shouldGrabTools = false
                    wait(0.2)
                    Delete_Inv_Event:FireServer()
                end
            end
        }
    )
    wait(0.3)
    local gamePassId = 951459548
    local LocalPlayer = game:GetService("Players").LocalPlayer or game.Players.LocalPlayer

    local function check_gamepass_func()
        local success, hasPass =
            pcall(
            function()
                return game:GetService("MarketplaceService"):UserOwnsGamePassAsync(LocalPlayer.UserId, gamePassId)
            end
        )
        if success then
            return hasPass
        else
            warn("Error checking game pass ownership:", hasPass)
            return false
        end
    end

    local owns_gamepass_func = check_gamepass_func()

    if not owns_gamepass_func then
        getgenv().shouldGrabTools = false
        Notify_User("Error:", "You do not own 'Admin', [GamePass] | Data Set.", 6)
    end

    local viewBooth =
        Tab11:CreateToggle(
        {
            Name = "View Your Booth",
            CurrentValue = false,
            Flag = "theBoothView",
            Callback = function(specBooth)
                local Workspace = game:GetService("Workspace") or workspace
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()

                local function get_booth()
                    for i, v in pairs(game:GetService("Workspace").Booth:GetChildren()) do
                        if
                            v.User.SurfaceGui.ImageLabel.Image ==
                                "https://www.roblox.com/headshot-thumbnail/image?userId=" ..
                                    tostring(game.Players.LocalPlayer.UserId) .. "&width=420&height=420&format=png"
                         then
                            return v
                        end
                    end
                    return nil
                end

                local plr_booth = get_booth()

                if not plr_booth then
                    return notify("Error: ", "You do not have a booth, claim one!", 6.5)
                end
                wait()
                if specBooth and plr_booth then
                    getgenv().viewing_booth = true
                    Workspace.CurrentCamera.CameraSubject = plr_booth
                else
                    local Workspace = game:GetService("Workspace") or workspace
                    local Players = game:GetService("Players")
                    local LocalPlayer = Players.LocalPlayer
                    local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()

                    getgenv().viewing_booth = false
                    wait(0.2)
                    Workspace.CurrentCamera.CameraSubject = Character
                end
            end
        }
    )

    local TPToBooth =
        Tab11:CreateButton(
        {
            Name = "Teleport To Booth",
            Callback = function()
                local Workspace = game:GetService("Workspace") or cloneref(game:GetService("Workspace"))
                local Players = game:GetService("Players") or cloneref(game:GetService("Players"))
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()

                local function get_booth()
                    for i, v in pairs(Workspace:FindFirstChild("Booth"):GetChildren()) do
                        if
                            v.User.SurfaceGui.ImageLabel.Image ==
                                "https://www.roblox.com/headshot-thumbnail/image?userId=" ..
                                    tostring(game.Players.LocalPlayer.UserId) .. "&width=420&height=420&format=png"
                         then
                            return v
                        end
                    end
                    return nil
                end

                local plr_booth = get_booth()

                if not plr_booth then
                    return notify("Error: ", "You do not have a booth, claim one!", 6.5)
                end
                task.wait()
                Character:PivotTo(plr_booth:GetPivot())
            end
        }
    )

    local ChatBypassBest =
        Tab4:CreateButton(
        {
            Name = "Chat Bypass (UserCreation)",
            Callback = function()
                --loadstring(game:HttpGet("https://raw.githubusercontent.com/1price/usercreation/refs/heads/main/UserCreation.lua", true))()
                Notify_User("Error:", "The library would close and you would have to rejoin.", 6)
                return Notify_User("[Read]:", "Usercreation bypassing is temporarily disabled.", 6)
            end
        }
    )

    local GetFakeChatGUI =
        Tab4:CreateButton(
        {
            Name = "Fake Chat GUI",
            Callback = function()
                loadstring(
                    game:HttpGet(
                        ("https://raw.githubusercontent.com/EnterpriseExperience/FakeChatGUI/main/LmaoBruh.lua")
                    )
                )()
            end
        }
    )
    if getgenv().hasLoadedAntiLog then
        warn("You have already loaded AntiChat Logger!")
    else
        local TextChatService = game:GetService("TextChatService")
        local Players = game:GetService("Players")
        local LocalPlayer = Players.LocalPlayer
        local chat = TextChatService.ChatInputBarConfiguration.TargetTextChannel

        local function sendchat(msg)
            chat:SendAsync(msg)
        end

        for i = 1, 8 do
            sendchat("   ")
        end
        wait(0.2)
        getgenv().hasLoadedAntiLog = true
    end

    local inputBypassTextBooth =
        Tab11:CreateInput(
        {
            Name = "Booth Text Bypass",
            PlaceholderText = "Text",
            RemoveTextAfterFocusLost = true,
            Callback = function(enteredTextInput)
                local TextChatService = game:GetService("TextChatService")
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Rep_Storage = game:GetService("ReplicatedStorage")
                local Booth_Remote =
                    Rep_Storage:FindFirstChild("UpdateBoothText") or Rep_Storage:WaitForChild("UpdateBoothText")

                local letters = {
                    set1 = {
                        ["a"] = "ẳ",
                        ["b"] = "ɓ",
                        ["c"] = "ㄈ",
                        ["d"] = "ȡ",
                        ["e"] = "ȇ",
                        ["f"] = "ӻ",
                        ["g"] = "ɠ",
                        ["h"] = "ȟ",
                        ["i"] = "׀",
                        ["j"] = "ǰ",
                        ["k"] = "ҟ",
                        ["l"] = "ȴ",
                        ["m"] = "ɱ",
                        ["n"] = "冂",
                        ["o"] = "ό",
                        ["p"] = "ᵽ",
                        ["q"] = "ԛ",
                        ["r"] = "ŗ",
                        ["s"] = "ȿ",
                        ["t"] = "丅",
                        ["u"] = "ȕ",
                        ["v"] = "ѵ",
                        ["w"] = "ώ",
                        ["x"] = "ẍ",
                        ["y"] = "ƴ",
                        ["z"] = "ȥ"
                    }
                }

                local numbers = {
                    set1 = {
                        ["0"] = "Θ",
                        ["1"] = "Ɩ",
                        ["2"] = "ƻ",
                        ["3"] = "Ʒ",
                        ["4"] = "🄅",
                        ["5"] = "Ƽ",
                        ["6"] = "Ϭ",
                        ["7"] = "🄈",
                        ["8"] = "Ȣ",
                        ["9"] = "Θ"
                    }
                }

                local function convert(text)
                    local letters_set = letters["set1"]
                    local numbers_set = numbers["set1"]

                    local converted = ""
                    for i = 1, #text do
                        local char = text:sub(i, i)
                        local lower_char = char:lower()

                        if char:match("%a") then
                            if lettersBypass then
                                converted = converted .. char
                            else
                                converted = converted .. (letters_set[lower_char] or char)
                            end
                        elseif char:match("%d") then
                            if numbersBypass then
                                converted = converted .. char
                            else
                                converted = converted .. (numbers_set[char] or char)
                            end
                        else
                            converted = converted .. char
                        end
                    end
                    return converted
                end

                local booth_colors = {
                    "Teal",
                    "Gray",
                    "Red"
                }

                local function color_selector()
                    local randomIndex = math.random(1, #booth_colors)
                    return booth_colors[randomIndex]
                end

                local booth_fonts = {
                    "DenkOne",
                    "GrenzeGotisch",
                    "SourceSans"
                }

                local function font_selector()
                    local randomIndex = math.random(1, #booth_fonts)
                    return booth_fonts[randomIndex]
                end

                wait(.2)
                local function send_bypass_config(msg)
                    local function getStall()
                        for i, v in pairs(game:GetService("Workspace").Booth:GetChildren()) do
                            if
                                v.User.SurfaceGui.ImageLabel.Image ==
                                    "https://www.roblox.com/headshot-thumbnail/image?userId=" ..
                                        tostring(game.Players.LocalPlayer.UserId) .. "&width=420&height=420&format=png"
                             then
                                return v
                            end
                        end
                        return nil
                    end

                    local LocalStall = getStall()

                    if not LocalStall then
                        return Rayfield:Notify(
                            {
                                Title = "Error: No Booth",
                                Content = "You do not own a booth!",
                                Duration = 7,
                                Image = 4483362458,
                                Actions = {
                                    Ignore = {
                                        Name = "Okay!",
                                        Callback = function()
                                            print("...")
                                        end
                                    }
                                }
                            }
                        )
                    else
                        print(tostring(LocalStall))
                    end
                    wait()
                    local args = {
                        [1] = tostring(convert(msg)),
                        [2] = tostring(color_selector()),
                        [3] = tostring(font_selector())
                    }

                    Booth_Remote:FireServer(unpack(args))
                end

                send_bypass_config(enteredTextInput)
            end
        }
    )

    local ClearAllMsgs =
        Tab4:CreateButton(
        {
            Name = "Clear Chat Messages",
            Callback = function()
                local TextChatService = game:GetService("TextChatService")
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local chat = TextChatService.ChatInputBarConfiguration.TargetTextChannel

                local function sendchat(msg)
                    chat:SendAsync(msg)
                end

                local random_number = math.random(1, 9)
                for i = 1, random_number do
                    if random_number >= 6 then
                        sendchat("")
                    else
                        sendchat(" . ")
                    end
                end
            end
        }
    )

    local DoCharacterFlicking =
        Tab2:CreateToggle(
        {
            Name = "Character Flicker (FE)",
            CurrentValue = false,
            Flag = "CharFlickeringLmao",
            Callback = function(Flick)
                if Flick then
                    getgenv().CharFlick = true
                    while getgenv().CharFlick == true do
                        wait()
                        local Rep_Storage =
                            game:GetService("ReplicatedStorage") or cloneref(game:GetService("ReplicatedStorage")) or
                            game.ReplicatedStorage or
                            game:FindService("ReplicatedStorage")
                        local Update_Height_Remote =
                            Rep_Storage:WaitForChild("UpdateHeight") or Rep_Storage:FindFirstChild("UpdateHeight")
                        local Update_Depth_Remote =
                            Rep_Storage:WaitForChild("UpdateDepth") or Rep_Storage:FindFirstChild("UpdateDepth")
                        local Update_Width_Remote =
                            Rep_Storage:WaitForChild("UpdateWidth") or Rep_Storage:FindFirstChild("UpdateWidth")

                        local args = {
                            [1] = 0
                        }

                        Update_Height_Remote:FireServer(unpack(args))
                        wait()
                        local args = {
                            [1] = 0
                        }

                        Update_Depth_Remote:FireServer(unpack(args))
                        wait()
                        local args = {
                            [1] = 0
                        }

                        Update_Width_Remote:FireServer(unpack(args))
                        wait()
                        local args = {
                            [1] = 1
                        }

                        Update_Height_Remote:FireServer(unpack(args))
                        wait()
                        local args = {
                            [1] = 1
                        }

                        Update_Depth_Remote:FireServer(unpack(args))
                        wait()
                        local args = {
                            [1] = 1
                        }

                        Update_Width_Remote:FireServer(unpack(args))
                    end
                else
                    local Rep_Storage =
                        game:GetService("ReplicatedStorage") or cloneref(game:GetService("ReplicatedStorage")) or
                        game.ReplicatedStorage or
                        game:FindService("ReplicatedStorage")
                    local Modify_User_Remote =
                        Rep_Storage:WaitForChild("ModifyUserEvent") or Rep_Storage:FindFirstChild("ModifyUserEvent")
                    local Players =
                        game:GetService("Players") or cloneref(game:GetService("Players")) or game.Players or
                        game:FindService("Players")
                    local Local_Player = Players.LocalPlayer
                    local Local_Plr_Name = Local_Player.Name or tostring(Local_Player.Name)

                    getgenv().CharFlick = false
                    wait(1)
                    repeat
                        wait()
                    until getgenv().CharFlick == false
                    wait(0.3)
                    local args = {
                        [1] = tostring(Local_Plr_Name)
                    }

                    Modify_User_Remote:FireServer(unpack(args))
                end
            end
        }
    )
    wait()
    print("Loading Connection Manager... :[Waiting On Response]:")
    wait(.3)
    local startEvent = Instance.new("BindableEvent")
    startEvent.Name = "ConnectEvent"
    startEvent.Parent = game:GetService("ReplicatedStorage")
    wait(.1)
    local disconnectEvent = Instance.new("BindableEvent")
    disconnectEvent.Name = "DisconnectEvent"
    disconnectEvent.Parent = game:GetService("ReplicatedStorage")
    wait(0.3)
    if startEvent and disconnectEvent then
        print("Loaded Connection Manager! -[200 : Success]-")
    else
        warn("UNABLE TO LOAD CONNECTION MANAGER, BAD_REQUESTED_RESPONSE")
    end
    wait()
    local Settings = {
        Keybind = "C"
    }

    local GetInvis =
        Tab2:CreateButton(
        {
            Name = "Invisible",
            Callback = function()
                if getgenv().Invis_Loaded == true or Invis_Loaded and not getgenv().INVIS_DEBUG == true then
                    return Notify_User("Error:", "Invisible Is Already Loaded!", 6.5)
                end

                local UserIds = {
                    6132973250,
                    4437551748,
                    7054509230
                }

                pcall(
                    function()
                        getgenv().Invis_Loaded = true
                    end
                )

                local ScriptStarted = false
                local Transparency = true
                local Keybind = Settings.Keybind
                local NoClip = true

                local GetPlayers = game:GetService("Players")
                local Player = GetPlayers.LocalPlayer
                local RealCharacter = Player.Character or Player.CharacterAdded:Wait()

                local IsInvisible = false

                RealCharacter.Archivable = true

                local FakeCharacter = RealCharacter:Clone()
                local Workspace_Service = game:GetService("Workspace") or workspace

                local Part
                Part = Instance.new("Part", Workspace_Service)
                Part.Anchored = true
                Part.Size = Vector3.new(200, 1, 200)
                Part.CFrame = CFrame.new(9999, 50, 999)
                Part.CanCollide = true
                Part.Name = "BasePart"

                FakeCharacter.Parent = Workspace_Service
                FakeCharacter.HumanoidRootPart.CFrame = Part.CFrame * CFrame.new(0, 5, 0)

                for i, v in pairs(RealCharacter:GetChildren()) do
                    if v:IsA("LocalScript") then
                        local clone = v:Clone()
                        clone.Disabled = true
                        clone.Parent = FakeCharacter
                    end
                end

                if Transparency then
                    for i, v in pairs(FakeCharacter:GetDescendants()) do
                        if v:IsA("BasePart") then
                            v.Transparency = 0.5
                        end
                    end
                end

                local CanInvis = true

                function RealCharacterDied()
                    local Workspace_Service = game:GetService("Workspace") or workspace

                    CanInvis = false
                    RealCharacter:Destroy()
                    RealCharacter = Player.Character
                    CanInvis = true
                    isinvisible = false
                    FakeCharacter:Destroy()
                    Workspace_Service.CurrentCamera.CameraSubject = RealCharacter.Humanoid

                    RealCharacter.Archivable = true
                    FakeCharacter = RealCharacter:Clone()
                    Part:Destroy()
                    Part = Instance.new("Part", Workspace_Service)
                    Part.Anchored = true
                    Part.Size = Vector3.new(200, 1, 200)
                    Part.CFrame = CFrame.new(999, 999, 999)
                    Part.CanCollide = true
                    Part.Name = "MeshPart"
                    FakeCharacter.Parent = Workspace_Service
                    FakeCharacter.HumanoidRootPart.CFrame = Part.CFrame * CFrame.new(0, 5, 0)

                    for i, v in pairs(RealCharacter:GetChildren()) do
                        if v:IsA("LocalScript") then
                            local clone = v:Clone()
                            clone.Disabled = true
                            clone.Parent = FakeCharacter
                        end
                    end

                    if Transparency then
                        for i, v in pairs(FakeCharacter:GetDescendants()) do
                            if v:IsA("BasePart") then
                                v.Transparency = 0.8
                            end
                        end
                    end

                    RealCharacter.Humanoid.Died:Connect(
                        function()
                            getgenv().Invis_Loaded = false
                            RealCharacter:Destroy()
                            FakeCharacter:Destroy()
                        end
                    )
                    Player.CharacterAppearanceLoaded:Connect(RealCharacterDied)
                end

                RealCharacter.Humanoid.Died:Connect(
                    function()
                        getgenv().Invis_Loaded = false
                        RealCharacter:Destroy()
                        FakeCharacter:Destroy()
                    end
                )

                Player.CharacterAppearanceLoaded:Connect(RealCharacterDied)

                local Run_Service = game:GetService("RunService")
                local PseudoAnchor
                Run_Service.RenderStepped:Connect(
                    function()
                        if PseudoAnchor ~= nil then
                            PseudoAnchor.CFrame = Part.CFrame * CFrame.new(0, 5, 0)
                        end
                        if NoClip then
                            for i, v in pairs(FakeCharacter:GetDescendants()) do
                                if v:IsA("BasePart") then
                                    v.CanCollide = false
                                end
                            end
                        end
                    end
                )

                PseudoAnchor = FakeCharacter.HumanoidRootPart
                local function Invisible()
                    if IsInvisible == false then
                        local StoredCF = RealCharacter.HumanoidRootPart.CFrame
                        RealCharacter.HumanoidRootPart.CFrame = FakeCharacter.HumanoidRootPart.CFrame
                        FakeCharacter.HumanoidRootPart.CFrame = StoredCF
                        RealCharacter.Humanoid:UnequipTools()
                        Player.Character = FakeCharacter
                        Workspace_Service.CurrentCamera.CameraSubject = FakeCharacter.Humanoid
                        PseudoAnchor = RealCharacter.HumanoidRootPart
                        for i, v in pairs(FakeCharacter:GetChildren()) do
                            if v:IsA("LocalScript") then
                                v.Disabled = false
                            end
                        end

                        IsInvisible = true
                    else
                        local StoredCF = FakeCharacter.HumanoidRootPart.CFrame
                        FakeCharacter.HumanoidRootPart.CFrame = RealCharacter.HumanoidRootPart.CFrame

                        RealCharacter.HumanoidRootPart.CFrame = StoredCF

                        FakeCharacter.Humanoid:UnequipTools()
                        Player.Character = RealCharacter
                        Workspace_Service.CurrentCamera.CameraSubject = RealCharacter.Humanoid
                        PseudoAnchor = FakeCharacter.HumanoidRootPart
                        for i, v in pairs(FakeCharacter:GetChildren()) do
                            if v:IsA("LocalScript") then
                                v.Disabled = true
                            end
                        end

                        IsInvisible = false
                    end
                end

                local User_Input_Service = game:GetService("UserInputService")
                local Sound_Service = game:GetService("SoundService")

                User_Input_Service.InputBegan:Connect(
                    function(key, gamep)
                        if gamep then
                            return
                        end
                        if key.KeyCode.Name:lower() == Keybind:lower() and CanInvis and RealCharacter and FakeCharacter then
                            if
                                RealCharacter:FindFirstChild("HumanoidRootPart") and
                                    FakeCharacter:FindFirstChild("HumanoidRootPart")
                             then
                                Invisible()
                            end
                        end
                    end
                )
                local Sound = Instance.new("Sound", Sound_Service)
                Sound.SoundId = "rbxassetid://232127604"
                Sound:Play()
                Notify_User("Success!", "Invisible Has Been Loaded!", 7)
                task.wait(.3)
                Notify_User("Note:", "Press " .. tostring(Settings.Keybind) .. " to change visibility.", 10)
            end
        }
    )

    local PrivRoomFloor =
        Tab10:CreateButton(
        {
            Name = "TP To Private Room (Inside)",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(4220.82275, 2.76511836, 60.7681046)
            end
        }
    )

    local NextToBathrooms =
        Tab10:CreateButton(
        {
            Name = "TP To Room Next To Bathrooms",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(-108.536659, 5.38924313, 135.303314)
            end
        }
    )

    local TPToBathrooms =
        Tab10:CreateButton(
        {
            Name = "TP To Bathrooms",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(-72.3955917, 5.09832525, 93.0914459)
            end
        }
    )

    local TPToChilling =
        Tab10:CreateButton(
        {
            Name = "TP To Chill Spot",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(228.970184, 5.75081444, -21.5613441)
            end
        }
    )

    local TPPicnicFirst =
        Tab10:CreateButton(
        {
            Name = "TP To Picnic (Seat 1)",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(85.846756, 3.61196709, -29.8345909)
            end
        }
    )

    local TPPicnicSecond =
        Tab10:CreateButton(
        {
            Name = "TP To Picnic (Seat 2)",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(76.6581955, 3.61196709, -29.8332996)
            end
        }
    )

    local TPMicFirst =
        Tab10:CreateButton(
        {
            Name = "TP To Stage (Mic 1)",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")
                HumanoidRootPart.CFrame = CFrame.new(39.2528572, 7.80023623, -67.7634125)
            end
        }
    )

    local TPMicSecond =
        Tab10:CreateButton(
        {
            Name = "TP To Stage (Mic 2)",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(14.8289356, 7.80023623, -67.7656097)
            end
        }
    )

    local TPMiddleRoomArea =
        Tab10:CreateButton(
        {
            Name = "TP To Middle Room (Tent)",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(70.9464493, 5.62692404, 24.2968006)
            end
        }
    )

    local TPBoothRows =
        Tab10:CreateButton(
        {
            Name = "TP To Booth Rows (Table)",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(26.7397423, 7.81395245, 86.7164536)
            end
        }
    )

    local TPToTowerFloatPart =
        Tab10:CreateButton(
        {
            Name = "TP To Tower (Float Up Part)",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(61.3288841, 72.0192184, 215.731613)
            end
        }
    )

    local TPToTowerTop =
        Tab10:CreateButton(
        {
            Name = "TP To Tower (Top)",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(63.2298126, 284.407227, 193.529007)
            end
        }
    )

    local TPToHighestPoint =
        Tab10:CreateButton(
        {
            Name = "TP To Tower (Highest Part)",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(58.0468788, 313.312622, 225.215027)
            end
        }
    )

    local TPBooth1 =
        Tab10:CreateButton(
        {
            Name = "TP To Booth-1",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")
                local Workspace = game:GetService("Workspace")
                local Booth_Folder = Workspace:FindFirstChild("Booth")
                local Booth = Booth_Folder:FindFirstChild("Booth01")
                Character:PivotTo(Booth:GetPivot())
            end
        }
    )

    local TPBooth2 =
        Tab10:CreateButton(
        {
            Name = "TP To Booth-2",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")
                local Workspace = game:GetService("Workspace")
                local Booth_Folder = Workspace:FindFirstChild("Booth")
                local Booth = Booth_Folder:FindFirstChild("Booth02")
                Character:PivotTo(Booth:GetPivot())
            end
        }
    )

    local TPBooth3 =
        Tab10:CreateButton(
        {
            Name = "TP To Booth-3",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")
                local Workspace = game:GetService("Workspace")
                local Booth_Folder = Workspace:FindFirstChild("Booth")
                local Booth = Booth_Folder:FindFirstChild("Booth03")
                Character:PivotTo(Booth:GetPivot())
            end
        }
    )

    local TPBooth4 =
        Tab10:CreateButton(
        {
            Name = "TP To Booth-4",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")
                local Workspace = game:GetService("Workspace")
                local Booth_Folder = Workspace:FindFirstChild("Booth")
                local Booth = Booth_Folder:FindFirstChild("Booth04")
                Character:PivotTo(Booth:GetPivot())
            end
        }
    )

    local TPBooth5 =
        Tab10:CreateButton(
        {
            Name = "TP To Booth-5",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")
                local Workspace = game:GetService("Workspace")
                local Booth_Folder = Workspace:FindFirstChild("Booth")
                local Booth = Booth_Folder:FindFirstChild("Booth05")
                Character:PivotTo(Booth:GetPivot())
            end
        }
    )

    local TPToDonutShop =
        Tab10:CreateButton(
        {
            Name = "TP To Donut Shop",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(-80.8301239, 3.1662631, -82.6656799)
            end
        }
    )

    local TPSeat1Donut =
        Tab10:CreateButton(
        {
            Name = "TP To Donut Shop (Seat 1)",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(-98.4535675, 4.04168415, -96.7826004)
            end
        }
    )

    local TPSeat1Donut =
        Tab10:CreateButton(
        {
            Name = "TP To Donut Shop (Seat 2)",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(-91.7390671, 4.04168415, -90.0620728)
            end
        }
    )

    local TPTableSeat1 =
        Tab10:CreateButton(
        {
            Name = "TP To Donut Shop (Table Seat 1)",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(-102.440971, 4.51146317, -66.6184387)
            end
        }
    )

    local TPTableSeat2 =
        Tab10:CreateButton(
        {
            Name = "TP To Donut Shop (Table, Seat 2)",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(-94.6592941, 4.51146317, -74.3931046)
            end
        }
    )

    local TPBehindCounter =
        Tab10:CreateButton(
        {
            Name = "TP To Donut Shop (Behind Counter)",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(-122.382172, 3.22726321, -83.5359192)
            end
        }
    )

    local TPAboveRelax =
        Tab10:CreateButton(
        {
            Name = "TP Above Relaxing Room",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(-97.4412308, 24.4840164, 121.394676)
            end
        }
    )

    local TPSubmitNoteBoard =
        Tab10:CreateButton(
        {
            Name = "TP To Submit Note Board",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(58.6107864, 4.99999857, 245.690369)
            end
        }
    )

    local TPStageMic =
        Tab10:CreateButton(
        {
            Name = "TP To Stage Mic",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(-61.6848221, 10.0853853, 229.676834)
            end
        }
    )

    local TPPrivRoomRoof =
        Tab10:CreateButton(
        {
            Name = "TP To Private Room (Roof)",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRootPart =
                    Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")

                HumanoidRootPart.CFrame = CFrame.new(4220.37842, 23.5336628, 61.3636169)
            end
        }
    )

    local invisKeybindSet =
        Tab2:CreateInput(
        {
            Name = "Invisible Keybind",
            PlaceholderText = "C",
            RemoveTextAfterFocusLost = false,
            Callback = function(TheBind)
                Settings.Keybind = tostring(TheBind)
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local Humanoid =
                    Character:FindFirstChildWhichIsA("Humanoid") or Character:WaitForChild("Humanoid") or
                    Character:FindFirstChild("Humanoid") or
                    Character:WaitForChild("Humanoid", 9999)

                wait(0.5)
                repeat
                    wait()
                until Settings.Keybind == tostring(TheBind)
                wait(0.2)
                if getgenv().Invis_Loaded == true or Invis_Loaded and not getgenv().INVIS_DEBUG == true then
                    Rayfield:Notify(
                        {
                            Title = "Important Notification:",
                            Content = "You are going to be reset in 3 seconds...",
                            Duration = 5,
                            Image = 4483362458,
                            Actions = {
                                Ignore = {
                                    Name = "Okay!",
                                    Callback = function()
                                        print("The user tapped Okay!")
                                    end
                                }
                            }
                        }
                    )
                    wait(2.9)
                    Humanoid.Health = 0
                end
            end
        }
    )

    function clickAllTheDetectors()
        local clickDetectors = {}

        for _, model in pairs(workspace:GetDescendants()) do
            if model:IsA("Model") and model.Name == "Tic Tac Toe" then
                for _, part in pairs(model:GetDescendants()) do
                    if part:IsA("Part") then
                        local clickDetector = part:FindFirstChildOfClass("ClickDetector")
                        if clickDetector then
                            table.insert(clickDetectors, clickDetector)
                        end
                    end
                end
            end
        end

        for _, clickDetector in pairs(clickDetectors) do
            clickDetector.MaxActivationDistance = 99999
            fireclickdetector(clickDetector, 9999)
            fireclickdetector(clickDetector, 9999)
            fireclickdetector(clickDetector, 9999)
        end
    end

    local ClickingAllBoards =
        Tab5:CreateButton(
        {
            Name = "Click All TicTacToe Boards",
            Callback = function()
                clickAllTheDetectors()
            end
        }
    )

    local LoopClickAllBoards =
        Tab5:CreateToggle(
        {
            Name = "Click All TicTacToe Boards (Loop)",
            CurrentValue = false,
            Flag = "loopClickingAllBoards",
            Callback = function(ClickAll)
                if ClickAll then
                    getgenv().doAllClicks = true
                    while getgenv().doAllClicks == true do
                        wait(0.6)
                        clickAllTheDetectors()
                    end
                else
                    for i = 1, 100000 do
                        getgenv().doAllClicks = false
                        getgenv().doAllClicks = false
                        getgenv().doAllClicks = false
                        getgenv().doAllClicks = false
                        getgenv().doAllClicks = false
                    end
                end
            end
        }
    )

    local InfYield =
        Tab5:CreateButton(
        {
            Name = "Infinite Yield",
            Callback = function()
                loadstring(
                    game:HttpGet(
                        "https://raw.githubusercontent.com/EnterpriseExperience/crazyDawg/main/InfYieldOther.lua",
                        true
                    )
                )()
            end
        }
    )

    local AdonisAdminFE =
        Tab5:CreateButton(
        {
            Name = "FE Admin (Press ; )",
            Callback = function()
                if fireproximityprompt and cloneref then
                    loadstring(
                        game:HttpGet(
                            "https://raw.githubusercontent.com/EnterpriseExperience/AdonisAdminFE/main/AdminFE.lua",
                            true
                        )
                    )()
                elseif not fireproximityprompt and (not cloneref) then
                    return Rayfield:Notify(
                        {
                            Title = "Error: Not Compatible",
                            Content = "Your exploit cannot run this script.",
                            Duration = 7,
                            Image = 4483362458,
                            Actions = {
                                Ignore = {
                                    Name = "Okay!",
                                    Callback = function()
                                        print("...")
                                    end
                                }
                            }
                        }
                    )
                end
            end
        }
    )

    local WalkSpeedSliding =
        Tab2:CreateSlider(
        {
            Name = "WalkSpeed (Default): 16",
            Range = {16, 450},
            Increment = 1,
            Suffix = "",
            CurrentValue = 16,
            Flag = "walkSpeedValue",
            Callback = function(wsVal)
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local Humanoid = Character:FindFirstChildWhichIsA("Humanoid")

                if Humanoid then
                    Humanoid.WalkSpeed = wsVal
                else
                    repeat
                        wait()
                    until Humanoid and Humanoid.Health >= 90
                    wait(0.5)
                    warn("Humanoid Successfully Initialized! (1)")
                end
            end
        }
    )

    if game:GetService("Players").LocalPlayer.Character:FindFirstChildWhichIsA("Humanoid").UseJumpPower == true then
        Rayfield:Notify(
            {
                Title = "Success!",
                Content = "JumpPower is enabled, continuing...",
                Duration = 7,
                Image = 4483362458,
                Actions = {
                    Ignore = {
                        Name = "Okay!",
                        Callback = function()
                            print("...")
                        end
                    }
                }
            }
        )
        wait()
        local JumpPowerSliding =
            Tab2:CreateSlider(
            {
                Name = "JumpPower (Default): 50",
                Range = {50, 500},
                Increment = 1,
                Suffix = "",
                CurrentValue = 50,
                Flag = "jpValue",
                Callback = function(jpVal)
                    local Players = game:GetService("Players")
                    local LocalPlayer = Players.LocalPlayer
                    local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                    local Humanoid = Character:FindFirstChildWhichIsA("Humanoid")

                    if Humanoid then
                        Humanoid.JumpPower = jpVal
                    else
                        repeat
                            wait()
                        until Humanoid and Humanoid.Health >= 90
                        wait(0.5)
                        warn("Humanoid Successfully Initialized! (2)")
                    end
                end
            }
        )
        local Players = game:GetService("Players")
        local LocalPlayer = Players.LocalPlayer
        local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
        local Humanoid = Character:FindFirstChildWhichIsA("Humanoid")

        repeat
            wait()
        until Humanoid and Humanoid.Health >= 90
        wait(0.5)
        warn("Humanoid Successfully Initialized! (3)")
    elseif game:GetService("Players").LocalPlayer.Character:FindFirstChildWhichIsA("Humanoid").UseJumpPower == false then
        Rayfield:Notify(
            {
                Title = "Detection!",
                Content = "UseJumpPower is disabled, switching...",
                Duration = 7,
                Image = 4483362458,
                Actions = {
                    Ignore = {
                        Name = "Okay!",
                        Callback = function()
                            print("...")
                        end
                    }
                }
            }
        )
        wait(.2)
        local JumpingHeightSliding =
            Tab2:CreateSlider(
            {
                Name = "JumpHeight (Default): 7",
                Range = {7, 400},
                Increment = 1,
                Suffix = "",
                CurrentValue = 7,
                Flag = "JumpingHeightValue",
                Callback = function(jumpHeight)
                    local Players = cloneref(game:GetService("Players")) or game:GetService("Players")
                    local LocalPlayer = Players.LocalPlayer
                    local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                    local Humanoid = Character:FindFirstChildWhichIsA("Humanoid") or Character:WaitForChild("Humanoid")

                    if Humanoid then
                        Humanoid.JumpHeight = jumpHeight
                    else
                        repeat
                            wait()
                        until Humanoid and Humanoid.Health >= 90
                        wait(0.5)
                        warn("Humanoid Successfully Initialized! (4)")
                    end
                end
            }
        )
    end

    local GravSliding =
        Tab2:CreateSlider(
        {
            Name = "Gravity (Default): 196.2",
            Range = {1, 200},
            Increment = 1,
            Suffix = "",
            CurrentValue = 196.2,
            Flag = "GravityValue",
            Callback = function(gravVal)
                repeat
                    wait()
                until game:IsLoaded()
                wait()
                local GetWorkspace = game:GetService("Workspace")
                GetWorkspace.Gravity = gravVal
            end
        }
    )

    local antiBangTPLoop =
        Tab2:CreateToggle(
        {
            Name = "Anti-Bang/TP (Loop Method)",
            CurrentValue = false,
            Flag = "AntiBangTPLooping",
            Callback = function(doAntiTP)
                if getgenv().doTeleport == true then
                    getgenv().doTeleport = false
                end
                wait(0.5)
                if doAntiTP then
                    local Workspace = game:GetService("Workspace")
                    local Players = game:GetService("Players")
                    local LocalPlayer = Players.LocalPlayer
                    local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                    local HumanoidRP =
                        Character:FindFirstChild("HumanoidRootPart") or Character:WaitForChild("HumanoidRootPart")

                    if HumanoidRP and HumanoidRP ~= nil then
                        getgenv().doTeleport = true
                        while getgenv().doTeleport == true do
                            wait()
                            HumanoidRP.CFrame = CFrame.new(4213.66602, 2.76511836, 67.6830292)
                        end
                    else
                        warn("HumanoidRootPart was destroyed or is nil!")
                        wait()
                        getgenv().doTeleport = false
                    end
                else
                    getgenv().doTeleport = false
                    wait()
                    repeat
                        wait()
                    until getgenv().doTeleport == false
                    wait()
                    print("Success! getgenv().doTeleport = false")
                    wait(0.5)
                    local Workspace = cloneref(game:GetService("Workspace")) or game:GetService("Workspace")
                    local Players = cloneref(game:GetService("Players")) or game:GetService("Players")
                    local LocalPlayer = Players.LocalPlayer
                    local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                    local HumanoidRP =
                        Character:FindFirstChild("HumanoidRootPart") or Character:WaitForChild("HumanoidRootPart")
                    print("Teleporting Back...")
                    wait()
                    HumanoidRP.CFrame = CFrame.new(36.5316811, 4.99999952, 24.585743)
                end
            end
        }
    )

    local bruhAntiTPMethod3 =
        Tab2:CreateButton(
        {
            Name = "Anti-Bang/TP (Method 3, You Die To)",
            Callback = function()
                local voidPosition = Vector3.new(-499, -499, -499)
                local Workspace = cloneref(game:GetService("Workspace")) or game:GetService("Workspace")
                local Players = cloneref(game:GetService("Players")) or game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local HumanoidRP =
                    Character:FindFirstChild("HumanoidRootPart") or Character:WaitForChild("HumanoidRootPart")
                print("Killing...")
                wait(.4)
                HumanoidRP.CFrame = CFrame.new(voidPosition)
            end
        }
    )

    local MethodFourAntiTP =
        Tab2:CreateToggle(
        {
            Name = "Anti-TP (Method 4, Loop TP Void)",
            CurrentValue = false,
            Flag = "AntiTPMethod4",
            Callback = function(getLoopTpToVoid)
                if getLoopTpToVoid then
                    local putPositionTo = Vector3.new(-84385288, 69380040, 174817648)
                    local Workspace = cloneref(game:GetService("Workspace")) or game:GetService("Workspace")
                    local Players = cloneref(game:GetService("Players")) or game:GetService("Players")
                    local LocalPlayer = Players.LocalPlayer
                    local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                    local HumanoidRP =
                        Character:FindFirstChild("HumanoidRootPart") or Character:WaitForChild("HumanoidRootPart")
                    getgenv().loopTPToVoid = true
                    while getgenv().loopTPToVoid == true do
                        wait()
                        HumanoidRP.CFrame = CFrame.new(putPositionTo)
                    end
                else
                    getgenv().loopTPToVoid = false
                    wait()
                    repeat
                        wait()
                    until getgenv().loopTPToVoid == false
                    local Players = cloneref(game:GetService("Players")) or game:GetService("Players")
                    local LocalPlayer = Players.LocalPlayer
                    local Character = LocalPlayer.Character
                    local HumanoidRootPart =
                        Character:WaitForChild("HumanoidRootPart") or Character:FindFirstChild("HumanoidRootPart")
                    HumanoidRootPart.CFrame = CFrame.new(36.5316811, 4.99999952, 24.585743)
                end
            end
        }
    )

    local LightingReset =
        Tab9:CreateButton(
        {
            Name = "Reset Lighting",
            Callback = function()
                local Lighting = cloneref(game:GetService("Lighting")) or game:GetService("Lighting")
                local SunRays = Lighting:FindFirstChildOfClass("SunRaysEffect")

                Lighting.ClockTime = 14.5
                wait()
                Lighting.Brightness = 3
                wait()
                Lighting.Atmosphere.Density = 0.3
                wait()
                Lighting.Atmosphere.Offset = 0.25
                wait()
                Lighting.Atmosphere.Color = Color3.new(199, 199, 199)
                wait()
                Lighting.Atmosphere.Decay = Color3.new(106, 112, 125)
                wait()
                Lighting.Atmosphere.Glare = 0
                wait()
                Lighting.Atmosphere.Haze = 0
                wait()
                Lighting.Sky.MoonAngularSize = 11
                wait()
                Lighting.Sky.StarCount = 3000
                wait()
                Lighting.Sky.SunAngularSize = 11
                wait()
                Lighting.Bloom.Intensity = 1
                wait()
                Lighting.Bloom.Enabled = true
                wait()
                Lighting.Bloom.Size = 24
                wait()
                Lighting.Bloom.Threshold = 2
                wait()
                Lighting.DepthOfField.Enabled = false
                wait()
                Lighting.DepthOfField.FarIntensity = 0.1
                wait()
                Lighting.DepthOfField.FocusDistance = 0.05
                wait()
                Lighting.DepthOfField.InFocusRadius = 30
                wait()
                Lighting.DepthOfField.NearIntensity = 0.75
                wait()
                Lighting.SunRays.Enabled = true
                wait()
                Lighting.SunRays.Intensity = 0.01
                wait()
                Lighting.SunRays.Spread = 0.1
            end
        }
    )

    local fireworksToggle =
        Tab9:CreateToggle(
        {
            Name = "FireWorks (Sky)",
            CurrentValue = false,
            Flag = "FireworksInSkyLoop",
            Callback = function(FireWorksCrazy)
                if FireWorksCrazy then
                    local Lighting = game:GetService("Lighting")
                    Lighting.ClockTime = 1
                    wait()
                    Lighting.Brightness = 2
                    wait()
                    getgenv().setFireWorksOn = true
                    while getgenv().setFireWorksOn == true do
                        wait()
                        local player = game.Players.LocalPlayer
                        local Lighting = game:GetService("Lighting")

                        local function createFirework(position)
                            local firework = Instance.new("Part")
                            firework.Size = Vector3.new(1, 1, 1)
                            firework.Position = position
                            firework.Anchored = true
                            firework.CanCollide = false
                            firework.Material = Enum.Material.Neon
                            firework.Parent = workspace

                            local explosion = Instance.new("ParticleEmitter")
                            explosion.Color =
                                ColorSequence.new(
                                {
                                    ColorSequenceKeypoint.new(
                                        0,
                                        Color3.new(math.random(), math.random(), math.random())
                                    ),
                                    ColorSequenceKeypoint.new(
                                        0.5,
                                        Color3.new(math.random(), math.random(), math.random())
                                    ),
                                    ColorSequenceKeypoint.new(1, Color3.new(0, 0, 0))
                                }
                            )
                            explosion.Size = NumberSequence.new(2, 0)
                            explosion.Lifetime = NumberRange.new(0.5, 1)
                            explosion.Rate = 150
                            explosion.Speed = NumberRange.new(75, 150)
                            explosion.SpreadAngle = Vector2.new(180, 180)
                            explosion.Parent = firework

                            local light = Instance.new("PointLight")
                            light.Brightness = 300
                            light.Range = 200
                            light.Color = Color3.new(1, 1, 1)
                            light.Parent = firework

                            local sound = Instance.new("Sound")
                            sound.SoundId = "rbxassetid://272537961"
                            sound.Volume = 2.5
                            sound.Parent = firework
                            sound:Play()

                            wait(0.1)
                            explosion:Emit(200)
                            wait(1)
                            firework:Destroy()
                        end

                        local function launchFireworks()
                            local xOffset = math.random(-50, 50)
                            local yOffset = math.random(50, 100)
                            local zOffset = math.random(-50, 50)
                            local position = Vector3.new(xOffset, 50 + yOffset, zOffset)

                            createFirework(position)
                            wait(math.random(1, 2))
                        end

                        launchFireworks()
                    end
                else
                    getgenv().setFireWorksOn = false
                    wait(0.5)
                    resetLightingSettings()
                end
            end
        }
    )

    local NightTimeButton =
        Tab9:CreateButton(
        {
            Name = "NightTime",
            Callback = function()
                local Lighting = game:GetService("Lighting")
                if Lighting.ClockTime <= 1 then
                    Lighting.ClockTime = 0
                    wait()
                    Lighting.Brightness = 0
                else
                    resetLightingSettings()
                    wait(0.2)
                    Lighting.ClockTime = 0
                    wait()
                    Lighting.Brightness = 0
                end
            end
        }
    )

    local NightTimeWithLight =
        Tab9:CreateButton(
        {
            Name = "NightTime (With Night-Light)",
            Callback = function()
                local Lighting = game:GetService("Lighting")
                if Lighting.ClockTime <= 2 then
                    Lighting.ClockTime = 1
                    wait()
                    Lighting.Brightness = 2
                else
                    resetLightingSettings()
                    wait(0.2)
                    Lighting.ClockTime = 0
                    wait()
                    Lighting.Brightness = 0
                end
            end
        }
    )

    local DayTimeReset =
        Tab9:CreateButton(
        {
            Name = "DayTime",
            Callback = function()
                local Lighting = game:GetService("Lighting")
                Lighting.ClockTime = 12
                wait()
                Lighting.Brightness = 1.5
            end
        }
    )

    local SpookyMoonToggle =
        Tab9:CreateToggle(
        {
            Name = "Spooky Moon",
            CurrentValue = false,
            Flag = "SpookyMoonLooping",
            Callback = function(moonCrazy)
                local Lighting = game:GetService("Lighting")
                if moonCrazy then
                    getgenv().SpookyMoon = true
                    local sky = Lighting:FindFirstChildOfClass("Sky")

                    local function smoothTransition()
                        local Lighting = game:GetService("Lighting")
                        Lighting.ClockTime = 0
                        for i = 1, 60, 0.5 do
                            sky.MoonAngularSize = i
                            wait(0.05)
                        end
                        for i = 60, 1, -0.5 do
                            sky.MoonAngularSize = i
                            wait(0.05)
                        end
                    end

                    while getgenv().SpookyMoon == true do
                        wait()
                        smoothTransition()
                    end
                else
                    local Lighting = game:GetService("Lighting")
                    local sky = Lighting:FindFirstChildOfClass("Sky")
                    wait(0.5)
                    getgenv().SpookyMoon = false
                    wait(1)
                    getgenv().SpookyMoon = false
                    wait(1)
                    getgenv().SpookyMoon = false
                    wait(3)
                    resetLightingSettings()
                    wait(0.3)
                    sky.MoonAngularSize = 11
                    wait(0.6)
                    Lighting.ClockTime = 5
                    wait(0.5)
                    Lighting.ClockTime = 14
                end
            end
        }
    )

    local SpookySunLoop =
        Tab9:CreateToggle(
        {
            Name = "Spooky Sun",
            CurrentValue = false,
            Flag = "SpookySunDayTime",
            Callback = function(sunSpooky)
                if sunSpooky then
                    getgenv().SpookSun = true
                    local Lighting = cloneref(game:GetService("Lighting")) or game:GetService("Lighting")
                    local sky = Lighting:FindFirstChildOfClass("Sky")

                    local function smoothTransition()
                        local Lighting = cloneref(game:GetService("Lighting")) or game:GetService("Lighting")
                        local sky = Lighting:FindFirstChildOfClass("Sky")
                        Lighting.ClockTime = 14

                        for i = 1, 60, 0.5 do
                            sky.SunAngularSize = i
                            wait(0.05)
                        end
                        for i = 60, 1, -0.5 do
                            sky.SunAngularSize = i
                            wait(0.05)
                        end
                    end

                    while getgenv().SpookSun == true do
                        wait()
                        smoothTransition()
                    end
                else
                    local Lighting = cloneref(game:GetService("Lighting")) or game:GetService("Lighting")
                    local sky = Lighting:FindFirstChildOfClass("Sky")
                    wait(0.5)
                    getgenv().SpookSun = false
                    wait(1)
                    getgenv().SpookSun = false
                    wait(0.5)
                    getgenv().SpookSun = false
                    wait(1.5)
                    resetLightingSettings()
                end
            end
        }
    )

    local SpookyNightTimeHalloween =
        Tab9:CreateButton(
        {
            Name = "Spooky NightTime (Halloween Style)",
            Callback = function()
                local light = game:GetService("Lighting")

                light.Ambient = Color3.new(0, 0, 0)
                light.Brightness = 0
                light.ColorShift_Bottom = Color3.new(0, 0, 0)
                light.ColorShift_Top = Color3.new(0, 0, 0)
                light.GlobalShadows = true
                light.ShadowSoftness = 0.3
                light.Technology = Enum.Technology.Compatibility
                light.ClockTime = 3.5
                light.FogColor = Color3.new(0, 0, 0)
                light.FogEnd = 500
                light.FogStart = 500
                light.Bloom.Enabled = true
                light.Bloom.Intensity = 20
                light.Bloom.Size = 10
                light.Bloom.Threshold = 2
                light.DepthOfField.Enabled = false
                light.SunRays.Enabled = true
                light.SunRays.Intensity = 1
                light.SunRays.Spread = 3
            end
        }
    )

    local FreezeEmotesToggle =
        Tab12:CreateToggle(
        {
            Name = "Freeze Emotes",
            CurrentValue = false,
            Flag = "FreezingEveryEmote",
            Callback = function(freezeToggle)
                if freezeToggle then
                    if cloneref then
                        print("cloneref | Supported | true")
                    else
                        print("cloneref | Unsupported | false")
                    end
                    getgenv().doFreezeToggle = true
                    while getgenv().doFreezeToggle == true do
                        wait()
                        local Players = game:GetService("Players")
                        local LocalPlayer = Players.LocalPlayer
                        local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                        local Humanoid =
                            Character:FindFirstChildOfClass("Humanoid") or
                            Character:FindFirstChildOfClass("AnimationController")
                        local ActiveTracks = Humanoid:GetPlayingAnimationTracks()
                        for _, v in pairs(ActiveTracks) do
                            v:AdjustSpeed(0)
                        end
                    end
                else
                    getgenv().doFreezeToggle = false
                    wait(0.5)
                    local Players = game:GetService("Players")
                    local LocalPlayer = Players.LocalPlayer
                    local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                    local Humanoid =
                        Character:FindFirstChildOfClass("Humanoid") or
                        Character:FindFirstChildOfClass("AnimationController")
                    local ActiveTracks = Humanoid:GetPlayingAnimationTracks()
                    for _, v in pairs(ActiveTracks) do
                        v:AdjustSpeed(1)
                    end
                    wait()
                    for i, v in next, Humanoid:GetPlayingAnimationTracks() do
                        v:Stop()
                    end
                end
            end
        }
    )

    local StopAllEmotes =
        Tab12:CreateButton(
        {
            Name = "Stop Playing Emotes",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local Humanoid =
                    Character:FindFirstChildOfClass("Humanoid") or
                    Character:FindFirstChildOfClass("AnimationController")
                local ActiveTracks = Humanoid:GetPlayingAnimationTracks()
                for i, v in next, Humanoid:GetPlayingAnimationTracks() do
                    v:Stop()
                end
            end
        }
    )

    local EmoteSlidingSpeed =
        Tab12:CreateSlider(
        {
            Name = "Emote Speed Slider",
            Range = {0, 300},
            Increment = 1,
            Suffix = "",
            CurrentValue = 1,
            Flag = "EmoteSpeedSliding",
            Callback = function(slidingSpeed)
                local getEmoteNum = tonumber(slidingSpeed) or slidingSpeed
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local Humanoid =
                    Character:FindFirstChildOfClass("Humanoid") or
                    Character:FindFirstChildOfClass("AnimationController")
                local ActiveTracks = Humanoid:GetPlayingAnimationTracks()
                for _, v in pairs(ActiveTracks) do
                    v:AdjustSpeed(getEmoteNum)
                end
            end
        }
    )

    local InputSpeedBox =
        Tab12:CreateInput(
        {
            Name = "Emote Speed",
            PlaceholderText = "Number",
            RemoveTextAfterFocusLost = true,
            Callback = function(inputNum)
                local getNumberInput = tonumber(inputNum)
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local Humanoid =
                    Character:FindFirstChildOfClass("Humanoid") or
                    Character:FindFirstChildOfClass("AnimationController")
                local ActiveTracks = Humanoid:GetPlayingAnimationTracks()
                for _, v in pairs(ActiveTracks) do
                    v:AdjustSpeed(getNumberInput)
                end
            end
        }
    )

    local SpeedTheEmoteUp =
        Tab12:CreateButton(
        {
            Name = "Kinda Fast Emote Speed",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local Humanoid =
                    Character:FindFirstChildOfClass("Humanoid") or
                    Character:FindFirstChildOfClass("AnimationController")
                local ActiveTracks = Humanoid:GetPlayingAnimationTracks()
                for _, v in pairs(ActiveTracks) do
                    v:AdjustSpeed(2)
                end
            end
        }
    )

    local GettingFaster =
        Tab12:CreateButton(
        {
            Name = "Faster Emote Speed",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local Humanoid =
                    Character:FindFirstChildOfClass("Humanoid") or
                    Character:FindFirstChildOfClass("AnimationController")
                local ActiveTracks = Humanoid:GetPlayingAnimationTracks()
                for _, v in pairs(ActiveTracks) do
                    v:AdjustSpeed(4.5)
                end
            end
        }
    )

    local BackToNormalSpeed =
        Tab12:CreateButton(
        {
            Name = "Normal Emote Speed",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local Humanoid =
                    Character:FindFirstChildOfClass("Humanoid") or
                    Character:FindFirstChildOfClass("AnimationController")
                local ActiveTracks = Humanoid:GetPlayingAnimationTracks()
                for _, v in pairs(ActiveTracks) do
                    v:AdjustSpeed(1)
                end
            end
        }
    )

    local SlowerEmoteSpeed =
        Tab12:CreateButton(
        {
            Name = "Slow Emote Speed",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local Humanoid =
                    Character:FindFirstChildOfClass("Humanoid") or
                    Character:FindFirstChildOfClass("AnimationController")
                local ActiveTracks = Humanoid:GetPlayingAnimationTracks()
                for _, v in pairs(ActiveTracks) do
                    v:AdjustSpeed(0.5)
                end
            end
        }
    )

    local SlowingTheEmoteDown =
        Tab12:CreateButton(
        {
            Name = "Super Slow Emote Speed",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local Humanoid =
                    Character:FindFirstChildOfClass("Humanoid") or
                    Character:FindFirstChildOfClass("AnimationController")
                local ActiveTracks = Humanoid:GetPlayingAnimationTracks()
                for _, v in pairs(ActiveTracks) do
                    v:AdjustSpeed(0.1)
                end
            end
        }
    )

    local ReverseTheEmote =
        Tab12:CreateButton(
        {
            Name = "Reverse Emote Speed",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local Humanoid =
                    Character:FindFirstChildOfClass("Humanoid") or
                    Character:FindFirstChildOfClass("AnimationController")
                local ActiveTracks = Humanoid:GetPlayingAnimationTracks()
                for _, v in pairs(ActiveTracks) do
                    v:AdjustSpeed(-1)
                end
            end
        }
    )

    local FreeEmotesGUI =
        Tab14:CreateButton(
        {
            Name = "Free Emotes GUI",
            Callback = function()
                local StarterGui = game:GetService("StarterGui") or cloneref(game:GetService("StarterGui"))

                local function sendNotification(title, text, duration)
                    StarterGui:SetCore(
                        "SendNotification",
                        {
                            Title = title,
                            Text = text,
                            Duration = duration
                        }
                    )
                end

                sendNotification("Free Emotes:", "Press , [comma] to open Free Emotes GUI", 4)
                task.wait(.1)
                sendNotification("Open Button:", "Or use the button on the left side of your screen.", 4)
                task.wait()
                loadstring(
                    game:HttpGet(
                        "https://raw.githubusercontent.com/LmaoItsCrazyBro/qweytguqwebuqt/refs/heads/main/marked_esp_system_ai"
                    )
                )()
            end
        }
    )

    local MuteAllBruh =
        Tab1:CreateToggle(
        {
            Name = "Mute All",
            CurrentValue = false,
            Flag = "MutingEveryone",
            Callback = function(TheMuteAll)
                if TheMuteAll then
                    getgenv().LmaoGetMuted = true
                    for i, v in pairs(game:GetService("Players"):GetPlayers()) do
                        if v ~= game.Players.LocalPlayer then
                            local audio = v:FindFirstChild("AudioDeviceInput")
                            if audio then
                                audio.Muted = true
                            end
                        end
                    end
                else
                    getgenv().LmaoGetMuted = false
                    wait(0.2)
                    for i, v in pairs(game:GetService("Players"):GetPlayers()) do
                        if v ~= game.Players.LocalPlayer then
                            local audio = v:FindFirstChild("AudioDeviceInput")
                            if audio then
                                audio.Muted = false
                            end
                        end
                    end
                end
            end
        }
    )

    local MuteAPlayerSpecific =
        Tab1:CreateInput(
        {
            Name = "Mute Player",
            PlaceholderText = "User",
            RemoveTextAfterFocusLost = true,
            Callback = function(getAUser)
                local derUser = findplr(getAUser)

                if derUser then
                    local Players = game:GetService("Players")

                    getgenv().shouldMute = true

                    local function monitorPlayerAudio(player)
                        local audioDevice = player:FindFirstChild("AudioDeviceInput")
                        if audioDevice then
                            if getgenv().shouldMute == true then
                                audioDevice.Muted = true
                            end

                            if property == "Muted" and getgenv().shouldMute == true and not audioDevice.Muted then
                                audioDevice.Muted = true
                                wait()
                                Rayfield:Notify(
                                    {
                                        Title = "Success!",
                                        Content = tostring(derUser) .. " was muted successfully!",
                                        Duration = 7,
                                        Image = 4483362458,
                                        Actions = {
                                            Ignore = {
                                                Name = "Okay!",
                                                Callback = function()
                                                    print("...")
                                                end
                                            }
                                        }
                                    }
                                )
                            end
                        end
                    end

                    monitorPlayerAudio(derUser)
                else
                    getgenv().shouldMute = false
                    return Rayfield:Notify(
                        {
                            Title = "Error: Not Found",
                            Content = tostring(getAUser) .. " was not found!",
                            Duration = 7,
                            Image = 4483362458,
                            Actions = {
                                Ignore = {
                                    Name = "Okay!",
                                    Callback = function()
                                        print("...")
                                    end
                                }
                            }
                        }
                    )
                end
            end
        }
    )

    local RejoinButton =
        Tab15:CreateButton(
        {
            Name = "Rejoin",
            Callback = function()
                local TeleportService = game:GetService("TeleportService")
                local Players = game:GetService("Players") or cloneref(game:GetService("Players"))
                local PlaceId = game.PlaceId
                local JobId = game.JobId

                TeleportService:TeleportToPlaceInstance(PlaceId, JobId, Players.LocalPlayer)
            end
        }
    )

    local ServerHopButton =
        Tab15:CreateButton(
        {
            Name = "Server Hop (Not Supported on Solara?)",
            Callback = function()
                -- Thanks 'Infinite Yield' I am NOT trying to make any of this right now.
                httprequest =
                    (syn and syn.request) or (http and http.request) or http_request or (fluxus and fluxus.request) or
                    request
                local PlaceId = game.PlaceId
                local Players = game:GetService("Players")
                local JobId = game.JobId
                local TeleportService = game:GetService("TeleportService")
                local HttpService = game:GetService("HttpService")

                if httprequest then
                    local servers = {}
                    local req =
                        httprequest(
                        {
                            Url = string.format(
                                "https://games.roblox.com/v1/games/%d/servers/Public?sortOrder=Desc&limit=100&excludeFullGames=true",
                                PlaceId
                            )
                        }
                    )
                    local body = HttpService:JSONDecode(req.Body)

                    if body and body.data then
                        for i, v in next, body.data do
                            if
                                type(v) == "table" and tonumber(v.playing) and tonumber(v.maxPlayers) and
                                    v.playing < v.maxPlayers and
                                    v.id ~= JobId
                             then
                                table.insert(servers, 1, v.id)
                            end
                        end
                    end
                else
                    return print("Serverhop", "httprequest is unsupported.")
                end

                if #servers > 0 then
                    TeleportService:TeleportToPlaceInstance(
                        PlaceId,
                        servers[math.random(1, #servers)],
                        Players.LocalPlayer
                    )
                else
                    return print("Serverhop", "Couldn't find a server.")
                end
            end
        }
    )

    local ReExecuteGUI =
        Tab15:CreateButton(
        {
            Name = "Re-Execute GUI",
            Callback = function()
                local Players = game:GetService("Players")
                local LocalPlayer = Players.LocalPlayer
                local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
                local Humanoid =
                    Character:FindFirstChildWhichIsA("Humanoid") or Character:WaitForChild("Humanoid") or
                    Character:FindFirstChild("Humanoid") or
                    Character:FindFirstChildOfClass("Humanoid")
                getgenv().getLoopKick = false
                wait()
                getgenv().getLoopKick = false
                wait(0.2)
                getgenv().SCRIPT_EXECUTED = false
                getgenv().SCRIPT_EXECUTED = false
                getgenv().Invis_Loaded = false
                getgenv().GetLoopRunning = false
                getgenv().GetLoopRunning = false
                getgenv().LmaoGetMuted = false
                getgenv().GetDataResetLighting = false
                wait(0.2)
                Rayfield:Destroy()
                wait(1)
                loadstring(
                    game:HttpGet(
                        ("https://raw.githubusercontent.com/EnterpriseExperience/MicUpSource/refs/heads/main/v6-no-config-setting")
                    )
                )()
            end
        }
    )

    local DestroyGUIScript =
        Tab15:CreateButton(
        {
            Name = "Destroy GUI/Script",
            Callback = function()
                getgenv().getLoopKick = false
                wait()
                getgenv().getLoopKick = false
                wait(0.2)
                getgenv().SCRIPT_EXECUTED = false
                getgenv().SCRIPT_EXECUTED = false
                getgenv().Invis_Loaded = false
                getgenv().GetLoopRunning = false
                getgenv().GetLoopRunning = false
                getgenv().LmaoGetMuted = false
                getgenv().GetDataResetLighting = false
                wait(.3)
                Rayfield:Destroy()
            end
        }
    )

    local UnmuteAPlayer =
        Tab1:CreateInput(
        {
            Name = "Unmute Player",
            PlaceholderText = "User",
            RemoveTextAfterFocusLost = true,
            Callback = function(LolPUser)
                local thisUser = findplr(LolPUser)

                local Players = game:GetService("Players")

                if thisUser then
                    getgenv().shouldMute = false

                    local function monitorPlayerAudio(player)
                        local audioDevice = thisUser:FindFirstChild("AudioDeviceInput")
                        if audioDevice then
                            if getgenv().shouldMute == false then
                                audioDevice.Muted = false
                            end

                            if property == "Muted" and getgenv().shouldMute == false and audioDevice.Muted then
                                audioDevice.Muted = false
                                wait()
                                Rayfield:Notify(
                                    {
                                        Title = "Success!",
                                        Content = tostring(thisUser) .. " was unmuted successfully!",
                                        Duration = 7,
                                        Image = 4483362458,
                                        Actions = {
                                            Ignore = {
                                                Name = "Okay!",
                                                Callback = function()
                                                    print("...")
                                                end
                                            }
                                        }
                                    }
                                )
                            end
                        end
                    end

                    monitorPlayerAudio(thisUser)
                else
                    getgenv().shouldMute = false
                    return Rayfield:Notify(
                        {
                            Title = "Error: Not Found",
                            Content = tostring(LolPUser) .. " was not found!",
                            Duration = 7,
                            Image = 4483362458,
                            Actions = {
                                Ignore = {
                                    Name = "Okay!",
                                    Callback = function()
                                        print("...")
                                    end
                                }
                            }
                        }
                    )
                end
            end
        }
    )

    local ShiftToRun =
        Tab2:CreateToggle(
        {
            Name = "Shift To Run",
            CurrentValue = false,
            Flag = "SpeedCoilAlt",
            Callback = function(speedCoil)
                if speedCoil then
                    getgenv().getRunningState = true
                    getgenv().runningEnabled = true

                    local player = game.Players.LocalPlayer
                    local walkSpeed = 16
                    local runSpeed = 450

                    local function setupCharacter(character)
                        local humanoid =
                            character:WaitForChild("Humanoid") or character:FindFirstChildWhichIsA("Humanoid")

                        local function onShiftPress(input, gameProcessed)
                            if
                                input.KeyCode == Enum.KeyCode.LeftShift and not gameProcessed and
                                    getgenv().runningEnabled == true
                             then
                                humanoid.WalkSpeed = runSpeed
                            end
                        end

                        local function onShiftRelease(input, gameProcessed)
                            if
                                input.KeyCode == Enum.KeyCode.LeftShift and not gameProcessed and
                                    getgenv().runningEnabled == true
                             then
                                humanoid.WalkSpeed = walkSpeed
                            end
                        end

                        game:GetService("UserInputService").InputBegan:Connect(onShiftPress)
                        game:GetService("UserInputService").InputEnded:Connect(onShiftRelease)

                        humanoid.WalkSpeed = walkSpeed
                    end

                    player.CharacterAdded:Connect(setupCharacter)

                    if player.Character then
                        setupCharacter(player.Character)
                    end
                else
                    local player = game.Players.LocalPlayer
                    local character = player.Character or player.CharacterAdded:Wait()
                    local humanoid = character:WaitForChild("Humanoid")

                    humanoid.WalkSpeed = 16
                    getgenv().runningEnabled = false
                end
            end
        }
    )

    local function run_anims()
        local player = game.Players:FindFirstChild("ItsYoDawgWsgGng")
        if not player then
            return
        end

        print("Found Owner: ItsYoDawgWsgGng")

        local character = player.Character or player.CharacterAdded:Wait()
        local Animate = character:FindFirstChild("Animate") or character:WaitForChild("Animate", 1.5)

        if not Animate then
            return
        end

        Animate.Disabled = true
        wait(0.1)
        Animate.Disabled = false

        local humanoid = character:FindFirstChildOfClass("Humanoid")
        if humanoid then
            for _, track in pairs(humanoid:GetPlayingAnimationTracks()) do
                track:Stop()
            end
        end

        wait(0.2)
        Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=10921330408"
        Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=10921333667"
        Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=10921140719"
        Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=10921135644"
        Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=104325245285198"
        Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=845392038"
        Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=845396048"

        wait(0.2)
        if humanoid then
            humanoid:ChangeState(3)
        end
    end

    local function do_anims_func()
        local player = game.Players:FindFirstChild("ItsYoDawgWsgGng")
        if not player then
            warn("Owner was not found: ItsYoDawgWsgGng")
            return
        end

        player.CharacterAdded:Connect(run_anims)
        if
            player.Character and player.Character:FindFirstChild("HumanoidRootPart") and
                player.Character:FindFirstChild("Humanoid")
         then
            run_anims()
        end
    end

    if getgenv().ownerAnimsLoaded == nil then
        getgenv().ownerAnimsLoaded = false
    end

    if game.Players.LocalPlayer.Name == "ItsYoDawgWsgGng" and getgenv().ownerAnimsLoaded then
        warn("Owner-Animations already loaded!")
    elseif game.Players.LocalPlayer.Name == "ItsYoDawgWsgGng" and not getgenv().ownerAnimsLoaded then
        if typeof(do_anims_func) == "function" then
            do_anims_func()
            getgenv().ownerAnimsLoaded = true
        else
            warn("Error: Animation function is missing!")
        end
    else
        warn("Owner-Animation Packages not loaded, not owner.")
    end

    local function create_Button(localName, Name, callback)
        local localName =
            Tab17:CreateButton(
            {
                Name = tostring(Name),
                Callback = callback
            }
        )
    end

    create_Button(
        WickedPopularAnim,
        "[NEW] 'Wicked Popular' Animation Package",
        function()
            local player = game.Players.LocalPlayer
            local character = player.Character or player.CharacterAdded:Wait()
            local Animate = character:WaitForChild("Animate")

            if not Animate then
                return
            end

            Animate.Disabled = true
            task.wait()
            Animate.Disabled = false

            local humanoid = character:FindFirstChildOfClass("Humanoid")
            if humanoid then
                for _, track in pairs(humanoid:GetPlayingAnimationTracks()) do
                    track:Stop()
                end
            end

            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=118832222982049"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=76049494037641"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=92072849924640"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=72301599441680"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=104325245285198"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=131326830509784"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=121152442762481"
            task.wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        adidasAnim,
        "[NEW] Adidas Animation Package",
        function()
            local player = game.Players.LocalPlayer
            local character = player.Character or player.CharacterAdded:Wait()
            local Animate = character:WaitForChild("Animate")

            if not Animate then
                return
            end

            Animate.Disabled = true
            task.wait()
            Animate.Disabled = false

            local humanoid = character:FindFirstChildOfClass("Humanoid")
            if humanoid then
                for _, track in pairs(humanoid:GetPlayingAnimationTracks()) do
                    track:Stop()
                end
            end

            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=18537376492"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=18537371272"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=18537392113"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=18537384940"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=18537380791"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=18537363391"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=18537367238"

            task.wait()
            if humanoid then
                humanoid:ChangeState(3)
            end
            task.wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        NFLAnim,
        "[NEW] NFL Animation Package",
        function()
            local player = game.Players.LocalPlayer
            local character = player.Character or player.CharacterAdded:Wait()
            local Animate = character:WaitForChild("Animate")

            if not Animate then
                return
            end

            Animate.Disabled = true
            task.wait()
            Animate.Disabled = false

            local humanoid = character:FindFirstChildOfClass("Humanoid")
            if humanoid then
                for _, track in pairs(humanoid:GetPlayingAnimationTracks()) do
                    track:Stop()
                end
            end

            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=92080889861410"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=74451233229259"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=110358958299415"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=117333533048078"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=119846112151352"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=134630013742019"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=129773241321032"

            task.wait()
            if humanoid then
                humanoid:ChangeState(3)
            end
            task.wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        BoldAnim,
        "[NEW] Bold Animation Package",
        function()
            local player = game.Players.LocalPlayer
            local character = player.Character or player.CharacterAdded:Wait()
            local Animate = character:WaitForChild("Animate")

            if not Animate then
                return
            end

            Animate.Disabled = true
            task.wait()
            Animate.Disabled = false

            local humanoid = character:FindFirstChildOfClass("Humanoid")
            if humanoid then
                for _, track in pairs(humanoid:GetPlayingAnimationTracks()) do
                    track:Stop()
                end
            end

            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=16738333868"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=16738334710"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=16738340646"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=16738337225"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=16738336650"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=16738332169"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=16738333171"

            task.wait()
            if humanoid then
                humanoid:ChangeState(3)
            end
            task.wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        noBoundariesAnim,
        "[NEW] No Boundaries Animation Package",
        function()
            local player = game.Players.LocalPlayer
            local character = player.Character or player.CharacterAdded:Wait()
            local Animate = character:WaitForChild("Animate")

            if not Animate then
                return
            end

            Animate.Disabled = true
            task.wait()
            Animate.Disabled = false

            local humanoid = character:FindFirstChildOfClass("Humanoid")
            if humanoid then
                for _, track in pairs(humanoid:GetPlayingAnimationTracks()) do
                    track:Stop()
                end
            end

            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=18747067405"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=18747063918"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=18747074203"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=18747070484"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=18747069148"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=18747060903"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=18747062535"

            task.wait()
            if humanoid then
                humanoid:ChangeState(3)
            end
            task.wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        robotAnim,
        "Robot Animation Package",
        function()
            local player = game.Players.LocalPlayer
            local character = player.Character or player.CharacterAdded:Wait()
            local Animate = character:WaitForChild("Animate")

            if not Animate then
                return
            end

            Animate.Disabled = true
            task.wait()
            Animate.Disabled = false

            local humanoid = character:FindFirstChildOfClass("Humanoid")
            if humanoid then
                for _, track in pairs(humanoid:GetPlayingAnimationTracks()) do
                    track:Stop()
                end
            end

            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=10921248039"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=10921248831"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=10921255446"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=10921250460"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=10921252123"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=10921247141"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=10921251156"

            task.wait()
            if humanoid then
                humanoid:ChangeState(3)
            end
            task.wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        zombieAnim,
        "Zombie Animation Package",
        function()
            local Animate = game.Players.LocalPlayer.Character.Animate
            Animate.Disabled = true
            wait()
            Animate.Disabled = false
            local animtrack =
                game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):GetPlayingAnimationTracks()
            for i, track in pairs(animtrack) do
                track:Stop()
            end
            wait()
            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=616158929"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=616160636"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=616168032"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=616163682"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=616161997"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=616156119"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=616157476"
            wait()
            game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):ChangeState(3)
            wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        HeroAnim,
        "Hero Animation Package",
        function()
            local Animate = game.Players.LocalPlayer.Character.Animate
            Animate.Disabled = true
            wait()
            Animate.Disabled = false
            local animtrack =
                game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):GetPlayingAnimationTracks()
            for i, track in pairs(animtrack) do
                track:Stop()
            end
            wait()
            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=616111295"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=616113536"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=616122287"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=616117076"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=616115533"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=616104706"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=616108001"
            wait()
            game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):ChangeState(3)
            wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        vampireAnim,
        "Vampire Animation Package",
        function()
            local Animate = game.Players.LocalPlayer.Character.Animate
            Animate.Disabled = true
            wait()
            Animate.Disabled = false
            local animtrack =
                game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):GetPlayingAnimationTracks()
            for i, track in pairs(animtrack) do
                track:Stop()
            end
            wait()
            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=1083445855"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=1083450166"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=1083473930"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=1083462077"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=1083455352"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=1083439238"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=1083443587"
            wait()
            game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):ChangeState(3)
            wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        mageAnim,
        "Mage Animation Package",
        function()
            local Animate = game.Players.LocalPlayer.Character.Animate
            Animate.Disabled = true
            wait()
            Animate.Disabled = false
            local animtrack =
                game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):GetPlayingAnimationTracks()
            for i, track in pairs(animtrack) do
                track:Stop()
            end
            wait()
            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=707742142"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=707855907"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=707897309"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=707861613"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=707853694"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=707826056"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=707829716"
            wait()
            game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):ChangeState(3)
            wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        ghostAnim,
        "Ghost (FE) Animation Package",
        function()
            local Animate = game.Players.LocalPlayer.Character.Animate
            Animate.Disabled = true
            wait()
            Animate.Disabled = false
            local animtrack =
                game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):GetPlayingAnimationTracks()
            for i, track in pairs(animtrack) do
                track:Stop()
            end
            wait()
            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=616006778"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=616008087"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=616010382"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=616013216"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=616008936"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=616003713"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=616005863"
            wait()
            game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):ChangeState(3)
            wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        elderAnim,
        "Elder Animation Package",
        function()
            local Animate = game.Players.LocalPlayer.Character.Animate
            Animate.Disabled = true
            wait()
            Animate.Disabled = false
            local animtrack =
                game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):GetPlayingAnimationTracks()
            for i, track in pairs(animtrack) do
                track:Stop()
            end
            wait()
            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=845397899"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=845400520"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=845403856"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=845386501"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=845398858"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=845392038"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=845396048"
            wait()
            game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):ChangeState(3)
            wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        LevitationAnim,
        "Levitation Animation Package",
        function()
            local Animate = game.Players.LocalPlayer.Character.Animate
            Animate.Disabled = true
            wait()
            Animate.Disabled = false
            local animtrack =
                game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):GetPlayingAnimationTracks()
            for i, track in pairs(animtrack) do
                track:Stop()
            end
            wait()
            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=616006778"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=616008087"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=616013216"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=616010382"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=616008936"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=616003713"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=616005863"
            wait()
            game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):ChangeState(3)
            wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        AstronautAnim,
        "Astronaut Animation Package",
        function()
            local Animate = game.Players.LocalPlayer.Character.Animate
            Animate.Disabled = true
            wait()
            Animate.Disabled = false
            local animtrack =
                game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):GetPlayingAnimationTracks()
            for i, track in pairs(animtrack) do
                track:Stop()
            end
            wait()
            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=891621366"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=891633237"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=891667138"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=891636393"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=891627522"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=891609353"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=891617961"
            wait()
            game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):ChangeState(3)
            wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        NinjaAnim,
        "Ninja Animation Package",
        function()
            local Animate = game.Players.LocalPlayer.Character.Animate
            Animate.Disabled = true
            wait()
            Animate.Disabled = false
            local animtrack =
                game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):GetPlayingAnimationTracks()
            for i, track in pairs(animtrack) do
                track:Stop()
            end
            wait()
            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=656117400"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=656118341"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=656121766"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=656118852"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=656117878"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=656114359"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=656115606"
            wait()
            game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):ChangeState(3)
            wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        WerewolfAnim,
        "Werewolf Animation Package",
        function()
            local Animate = game.Players.LocalPlayer.Character.Animate
            Animate.Disabled = true
            wait()
            Animate.Disabled = false
            local animtrack =
                game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):GetPlayingAnimationTracks()
            for i, track in pairs(animtrack) do
                track:Stop()
            end
            wait()
            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=1083195517"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=1083214717"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=1083178339"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=1083216690"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=1083218792"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=1083182000"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=1083189019"
            wait()
            game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):ChangeState(3)
            wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        CartoonAnim,
        "Cartoon Animation Package",
        function()
            local Animate = game.Players.LocalPlayer.Character.Animate
            Animate.Disabled = true
            wait()
            Animate.Disabled = false
            local animtrack =
                game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):GetPlayingAnimationTracks()
            for i, track in pairs(animtrack) do
                track:Stop()
            end
            wait()
            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=742637544"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=742638445"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=742640026"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=742638842"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=742637942"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=742636889"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=742637151"
            wait()
            game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):ChangeState(3)
            wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        PirateAnim,
        "Pirate Animation Package",
        function()
            local Animate = game.Players.LocalPlayer.Character.Animate
            Animate.Disabled = true
            wait()
            Animate.Disabled = false
            local animtrack =
                game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):GetPlayingAnimationTracks()
            for i, track in pairs(animtrack) do
                track:Stop()
            end
            wait()
            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=750781874"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=750782770"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=750785693"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=750783738"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=750782230"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=750779899"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=750780242"
            wait()
            game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):ChangeState(3)
            wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        SneakyFEAnim,
        "Sneaky (FE) Animation Package",
        function()
            local Animate = game.Players.LocalPlayer.Character.Animate
            Animate.Disabled = true
            wait()
            Animate.Disabled = false
            local animtrack =
                game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):GetPlayingAnimationTracks()
            for i, track in pairs(animtrack) do
                track:Stop()
            end
            wait()
            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=1132473842"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=1132477671"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=1132510133"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=1132494274"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=1132489853"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=1132461372"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=1132469004"
            wait()
            game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):ChangeState(3)
            wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        ToyAnim,
        "Toy Animation Package",
        function()
            local Animate = game.Players.LocalPlayer.Character.Animate
            Animate.Disabled = true
            wait()
            Animate.Disabled = false
            local animtrack =
                game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):GetPlayingAnimationTracks()
            for i, track in pairs(animtrack) do
                track:Stop()
            end
            wait()
            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=782841498"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=782845736"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=782843345"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=782842708"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=782847020"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=782843869"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=782846423"
            wait()
            game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):ChangeState(3)
            wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        KnightAnim,
        "Knight Animation Package",
        function()
            local Animate = game.Players.LocalPlayer.Character.Animate
            Animate.Disabled = true
            wait()
            Animate.Disabled = false
            local animtrack =
                game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):GetPlayingAnimationTracks()
            for i, track in pairs(animtrack) do
                track:Stop()
            end
            wait()
            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=657595757"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=657568135"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=657552124"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=657564596"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=658409194"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=658360781"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=657600338"
            wait()
            game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):ChangeState(3)
            wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        ConfidentFEAnim,
        "Confident (FE) Animation Package",
        function()
            local Animate = game.Players.LocalPlayer.Character.Animate
            Animate.Disabled = true
            wait()
            Animate.Disabled = false
            local animtrack =
                game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):GetPlayingAnimationTracks()
            for i, track in pairs(animtrack) do
                track:Stop()
            end
            wait()
            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=1069977950"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=1069987858"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=1070017263"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=1070001516"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=1069984524"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=1069946257"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=1069973677"
            wait()
            game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):ChangeState(3)
            wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        PopstarFEAnim,
        "Popstar (FE) Animation Package",
        function()
            local Animate = game.Players.LocalPlayer.Character.Animate
            Animate.Disabled = true
            wait()
            Animate.Disabled = false
            local animtrack =
                game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):GetPlayingAnimationTracks()
            for i, track in pairs(animtrack) do
                track:Stop()
            end
            wait()
            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=1212900985"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=1212900985"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=1212980338"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=1212980348"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=1212954642"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=1213044953"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=1212900995"
            wait()
            game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):ChangeState(3)
            wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        PrincessFEAnim,
        "Princess (FE) Animation Package",
        function()
            local Animate = game.Players.LocalPlayer.Character.Animate
            Animate.Disabled = true
            wait()
            Animate.Disabled = false
            local animtrack =
                game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):GetPlayingAnimationTracks()
            for i, track in pairs(animtrack) do
                track:Stop()
            end
            wait()
            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=941003647"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=941013098"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=941028902"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=941015281"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=941008832"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=940996062"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=941000007"
            wait()
            game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):ChangeState(3)
            wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        CowboyFEAnim,
        "Cowboy (FE) Animation Package",
        function()
            local Animate = game.Players.LocalPlayer.Character.Animate
            Animate.Disabled = true
            wait()
            Animate.Disabled = false
            local animtrack =
                game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):GetPlayingAnimationTracks()
            for i, track in pairs(animtrack) do
                track:Stop()
            end
            wait()
            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=1014390418"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=1014398616"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=1014421541"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=1014401683"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=1014394726"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=1014380606"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=1014384571"
            wait()
            game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):ChangeState(3)
            wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        PatrolFEAnim,
        "Patrol (FE) Animation Package",
        function()
            local Animate = game.Players.LocalPlayer.Character.Animate
            Animate.Disabled = true
            wait()
            Animate.Disabled = false
            local animtrack =
                game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):GetPlayingAnimationTracks()
            for i, track in pairs(animtrack) do
                track:Stop()
            end
            wait()
            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=1149612882"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=1150842221"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=1151231493"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=1150967949"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=1150944216"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=1148811837"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=1148863382"
            wait()
            game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):ChangeState(3)
            wait()
            Animate.Disabled = false
        end
    )

    create_Button(
        ZombieFEAnim,
        "Zombie (FE) Animation Package",
        function()
            local Animate = game.Players.LocalPlayer.Character.Animate
            Animate.Disabled = true
            wait()
            Animate.Disabled = false
            local animtrack =
                game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):GetPlayingAnimationTracks()
            for i, track in pairs(animtrack) do
                track:Stop()
            end
            wait()
            Animate.idle.Animation1.AnimationId = "http://www.roblox.com/asset/?id=3489171152"
            Animate.idle.Animation2.AnimationId = "http://www.roblox.com/asset/?id=3489171152"
            Animate.walk.WalkAnim.AnimationId = "http://www.roblox.com/asset/?id=3489174223"
            Animate.run.RunAnim.AnimationId = "http://www.roblox.com/asset/?id=3489173414"
            Animate.jump.JumpAnim.AnimationId = "http://www.roblox.com/asset/?id=616161997"
            Animate.climb.ClimbAnim.AnimationId = "http://www.roblox.com/asset/?id=616156119"
            Animate.fall.FallAnim.AnimationId = "http://www.roblox.com/asset/?id=616157476"
            wait()
            game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"):ChangeState(3)
            wait()
            Animate.Disabled = false
        end
    )

    SystemBroken =
        Tab5:CreateButton(
        {
            Name = "System Broken",
            Callback = function()
                if game.PlaceId == 6884319169 or game.PlaceId == 15546218972 then
                    loadstring(
                        game:HttpGet("https://raw.githubusercontent.com/EnterpriseExperience/SystemBroken/main/source")
                    )()
                else
                    Rayfield:Notify(
                        {
                            Title = "Error!",
                            Content = "This is NOT Mic Up, Exiting...",
                            Duration = 7,
                            Image = 4483362458,
                            Actions = {
                                Ignore = {
                                    Name = "Okay!",
                                    Callback = function()
                                        print("...")
                                    end
                                }
                            }
                        }
                    )
                    wait(1)
                    game.Players.LocalPlayer:Kick("Stop trying to bypass, fucking skid.")
                end
            end
        }
    )

    ScriptOwnersLabel =
        Tab15:CreateParagraph(
        {Title = "Script Owner:", Content = "M1RD3RCAUGHT [Deleted] | ItsYoDatDawgWsgGng | [Main Account Now.]"}
    )
    YouTube_Plug =
        Tab15:CreateParagraph({Title = "Zacks Easy Hub", Content = "https://www.youtube.com/@AnonymousExploiting"})
    Discord_Plug = Tab15:CreateParagraph({Title = "Zacks Easy Hub", Content = "https://discord.gg/VJh3kkYzBn"})
    JoinDiscordLabel =
        Tab15:CreateParagraph(
        {Title = "Zacks Easy Hub", Content = "Join the discord for juicy updates, and maybe giveaways."}
    )
    Release_Date = Tab15:CreateParagraph({Title = "Zacks Easy Hub", Content = "V6 Released On: 11/5/2024"})
    wait(0.2)
    if getgenv().camera_zoom_data then
        print("CameraMaxZoomDistance - Data | True")
    else
        getgenv().camera_zoom_data = false
        wait(0.5)
        game:GetService("Players").LocalPlayer.CameraMaxZoomDistance = 800000
        getgenv().camera_zoom_data = true
        wait(0.1)
    end
end
wait(0.5)
loadGUI()
wait(0.3)
print("Running...")
wait(0.3)
getFolder =
    game:GetService("Workspace"):FindFirstChild("PartStorage") or
    game:GetService("Workspace"):WaitForChild("PartStorage")
getpart = getFolder:FindFirstChildOfClass("Part") or getFolder:FindFirstChildWhichIsA("Part")
if getFolder and getpart then
    getpart.Transparency = 1
else
    warn("ANTI-VOID_MISSING? ---")
end
wait(0.1)
if getgenv().Invis_Data then
    warn("Already Set Invis_Data")
else
    getgenv().Invis_Data = false
    wait(0.3)

    local function makeCharacterVisible(character)
        for _, part in pairs(character:GetDescendants()) do
            if part:IsA("BasePart") then
                part.Transparency = 0
                part.CanCollide = false
            end
        end
    end

    for _, player in pairs(game.Players:GetPlayers()) do
        if player ~= game.Players.LocalPlayer and player.Character then
            makeCharacterVisible(player.Character)
        end
    end
    wait()

    local function makePartInvisible(part)
        part.Transparency = 1
        part.CanCollide = false
    end

    local function makeHumanoidRootPartInvisible(character)
        local player = game.Players:GetPlayerFromCharacter(character)
        if player and player ~= game.Players.LocalPlayer then
            local humanoidRootPart = character:FindFirstChild("HumanoidRootPart")
            if humanoidRootPart then
                makePartInvisible(humanoidRootPart)
            end
        end
    end

    for _, player in pairs(game.Players:GetPlayers()) do
        if player.Character then
            makeHumanoidRootPartInvisible(player.Character)
        end
    end

    getgenv().Invis_Data = true
    wait(0.1)
end
wait(0.4)
PartStorageFolder =
    game:GetService("Workspace"):WaitForChild("PartStorage") or
    game:GetService("Workspace"):FindFirstChild("PartStorage")
FindBaseplate =
    PartStorageFolder:WaitForChild("BASEPLATE_CLONE_ANTI_VOID") or
    PartStorageFolder:FindFirstChild("BASEPLATE_CLONE_ANTI_VOID") or
    PartStorageFolder:FindFirstChildWhichIsA("Part")
if FindBaseplate.Transparency == 1 then
    FindBaseplate.Transparency = 0
    wait()
    FindBaseplate.Material = Enum.Material.Carpet
    wait(0.2)
    FindBaseplate.BrickColor = BrickColor.new("Grey")
else
    FindBaseplate.Transparency = 1
    wait(0.2)
    FindBaseplate.Material = Enum.Material.Carpet
end
wait(0.2)
print("Getting Requirements... [1 moment.]")
wait(0.3)
loadstring(
    game:HttpGet(
        "https://raw.githubusercontent.com/LmaoItsCrazyBro/Symmetrical-System/refs/heads/main/HelloWorld",
        true
    )
)()
wait(1)
game:GetService("StarterGui"):SetCore(
    "SendNotification",
    {
        Title = "Success!",
        Text = "Have fun! " .. tostring(game.Players.LocalPlayer.Name),
        Icon = "rbxassetid://1234567890",
        Duration = 10
    }
)
if getgenv().Muted_Data then
    print("Already Setup Unmute All.")
else
    getgenv().Muted_Data = false
    wait(0.3)
    print("Zacks Easy Hub [OUTPUT]: | Unmuting All...")
    wait(0.3)

    for _, player in pairs(game.Players:GetPlayers()) do
        if player ~= game.Players.LocalPlayer and player:FindFirstChild("AudioDeviceInput") then
            local audioDevice = player.AudioDeviceInput
            wait()
            print(
                tostring(audioDevice) ..
                    ", Player: " .. tostring(audioDevice.Parent) .. ", UserID: " .. tostring(audioDevice.Parent.UserId)
            )
            wait()
            audioDevice.Muted = false
            wait()
            print("Zacks Easy Hub | [OUTPUT]: New Changes...")
            wait()
            print(
                tostring(audioDevice) ..
                    ", Player: " .. tostring(audioDevice.Parent) .. ", UserID: " .. tostring(audioDevice.Parent.UserId)
            )
        end
    end

    getgenv().Muted_Data = true
end
wait(0.4)
if getgenv().Has_Died_Func then
    warn("Already setup death function.")
else
    Humanoid =
        game:GetService("Players").LocalPlayer.Character:FindFirstChildWhichIsA("Humanoid") or
        game:GetService("Players").LocalPlayer.Character:FindFirstChildOfClass("Humanoid")

    wait(0.3)
    Humanoid.Health = 0
    getgenv().Has_Died_Func = true
    wait(0.1)
    print("Died Func setup")
end
wait(0.5)
print("Successfully ran!")
wait()
print("YEAH! Zacks Easy Hub [ON TOP!]")
task.wait(0.5)
if getgenv().performance_stats then
    warn("Performance stats checked.")
else
    loadstring(
        game:HttpGet(
            "https://raw.githubusercontent.com/LmaoItsCrazyBro/expert-octo-telegram/refs/heads/main/expressive_contacting_ai.lua"
        )
    )()
    getgenv().performance_stats = true
end
