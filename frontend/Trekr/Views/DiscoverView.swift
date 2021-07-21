//
//  ContentView.swift
//  Trekr
//
//  Created by Yazeed AlKhalaf on 20/07/2021.
//

import SwiftUI

struct DiscoverView: View {
    @EnvironmentObject var locationsService: LocationsService
    
    var body: some View {
        if !locationsService.gotData {
            ProgressView()
                .navigationTitle("Discover")
        } else {
            ScrollView {
                ForEach(locationsService.locations) {location in
                    NavigationLink(
                        destination: LocationInfoView(
                            location: location
                        )
                    ) {
                        LocationWidget(
                            location: location
                        )
                    }
                }
            }
            .navigationTitle("Discover")
        }
    }
}
