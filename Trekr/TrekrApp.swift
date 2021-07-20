//
//  TrekrApp.swift
//  Trekr
//
//  Created by Yazeed AlKhalaf on 20/07/2021.
//

import SwiftUI

@main
struct TrekrApp: App {
    @StateObject var locationsLoader: LocationsLoader = LocationsLoader()
    @StateObject var tipsLoader: TipsLoader = TipsLoader()
    
    var body: some Scene {
        WindowGroup {
            TabView {
                NavigationView {
                    DiscoverView()
                }
                .tabItem {
                    Label(
                        "Discover",
                        systemImage: "airplane"
                    )
                }
                
                NavigationView {
                    WorldView()
                }
                .tabItem {
                    Label(
                        "Locations",
                        systemImage: "globe"
                    )
                }
                
                NavigationView {
                    TipsView()
                }
                .tabItem {
                    Label(
                        "Info",
                        systemImage: "list.bullet"
                    )
                }
            }
            .environmentObject(locationsLoader)
            .environmentObject(tipsLoader)
        }
    }
}
