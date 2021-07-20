//
//  TrekrApp.swift
//  Trekr
//
//  Created by Yazeed AlKhalaf on 20/07/2021.
//

import SwiftUI

@main
struct TrekrApp: App {
    @StateObject var locations: Locations = Locations()
    @StateObject var tipsLoader: TipsLoader = TipsLoader()
    
    var body: some Scene {
        WindowGroup {
            TabView {
                NavigationView {
                    ContentView(location: locations.primary)
                }
                .tabItem {
                    Image(systemName: "airplane")
                    Text("Discover")
                }
                
                NavigationView {
                    WorldView()
                }
                .tabItem {
                    Image(systemName: "globe")
                    Text("Locations")
                }
                
                NavigationView {
                    TipsView()
                }
                .tabItem {
                    Image(systemName: "list.bullet")
                    Text("Info")
                }
            }
            .environmentObject(locations)
            .environmentObject(tipsLoader)
        }
    }
}
