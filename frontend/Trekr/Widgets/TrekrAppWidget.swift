//
//  TrekrAppWidget.swift
//  TrekrAppWidget
//
//  Created by Yazeed AlKhalaf on 21/07/2021.
//

import SwiftUI

struct TrekrAppWidget: View {
    @StateObject var locationsService: LocationsService = LocationsService()
    @StateObject var tipsService: TipsService = TipsService()
    
    var body: some View {
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
        .environmentObject(locationsService)
        .environmentObject(tipsService)
    }
}
